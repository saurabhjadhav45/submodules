import React, {
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import useClickOutSide from '../../it/core/hooks/useClickOutside';
import Checkbox from '../Checkbox/Checkbox';
import CloseIcon from '../icons/CloseIcon/CloseButtonIcon';
import DownIcon from '../icons/DownIcon/DownIcon';
import DynamicImage from './DynamicImage';
import './SelectField.scss';

export type OptionType = {
  id: number;
  tag: string;
  imageName?: string;
  isChecked?: boolean;
};

export interface ISelectFieldProps {
  /** checkBoxes are required or not */
  isCheckBoxes?: boolean;
  /** Search is required or not */
  isSearch?: boolean;
  /** options */
  options: OptionType[];
  /** Label for the Select field */
  label?: string;
  /** Multiple select or not */
  isMulti?: boolean;
  /** placeholder for the input */
  placeholder?: string;
  /** width of the SelectField */
  /** Onselect handle tracking the selected options */
  onSelect: (data: OptionType[]) => void;
  /** Clear all button is required or not */
  clearAllBtn?: boolean;
  /** heights are optional */
  maxMenuHeight?: number;
  eachOptionHeight?: number;

  checkBoxCheckedColor?: string;
  checkBoxSize?: 'small' | 'medium' | 'large';
  downIcon?: ReactNode;
}

function SelectField(props: ISelectFieldProps) {
  const {
    options,
    label,
    isSearch,
    isMulti,
    placeholder,
    onSelect,
    clearAllBtn,
    maxMenuHeight,
    eachOptionHeight,
    isCheckBoxes,
    checkBoxCheckedColor,
    checkBoxSize,
    downIcon,
  } = props;

  const [data, setData] = useState<OptionType[]>([]);

  const optionsMark = useMemo(
    () => options.map((opt) => ({...opt, isChecked: false})),
    [options]
  );

  const [allData, setAllData] = useState<OptionType[]>(optionsMark);
  const [optionsIn, setIsOptionsIn] = useState<OptionType[]>(optionsMark);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropUp, setIsDropUp] = useState<boolean>(false);

  const handleActive = useCallback(() => setIsActive(true), []);

  const handleDropDown = useCallback(
    (e: React.MouseEvent) => {
      setIsActive(!isActive);
      e.stopPropagation();
    },
    [isActive]
  );

  // outside click do options are closed
  const domNode = useClickOutSide(() => setIsActive(false));

  // onChange handle for input
  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  // sending the filter data to the parent;
  useEffect(() => {
    const selectedOptions = data.map((opt) => {
      const obj = opt;
      delete obj.isChecked;
      return obj;
    });
    onSelect(selectedOptions);
  }, [data, onSelect]);

  // useEffect handle the filter data part based on Search box;
  useEffect(() => {
    if (isSearch) {
      const arr1 = allData.filter((option) =>
        option.tag.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
      if (searchValue === '') {
        setIsOptionsIn(allData);
      } else {
        setIsOptionsIn(arr1);
      }
    }
  }, [allData, isSearch, searchValue]);

  // useEffect handle dropUp behavior of select tag
  useEffect(() => {
    const determineDropUp = () => {
      const options1 = options;
      const node = domNode.current;
      const windowHeight = window.innerHeight;
      const menuHeight = Math.min(
        maxMenuHeight as number,
        options1.length * (eachOptionHeight as number)
      );
      const instOffsetWithMenu =
        node.getBoundingClientRect().bottom + menuHeight;
      setIsDropUp(instOffsetWithMenu >= windowHeight);
    };
    window.addEventListener('resize', determineDropUp);
    window.addEventListener('scroll', determineDropUp);
    return () => {
      window.removeEventListener('resize', determineDropUp);
      window.removeEventListener('scroll', determineDropUp);
    };
  }, [domNode, eachOptionHeight, maxMenuHeight, options]);

  // setup the options marked or not
  const setupOption = useCallback(
    (option: OptionType, checkmark: boolean) => {
      const newList = allData.map((opt) =>
        opt.id === option.id ? {...opt, isChecked: checkmark} : opt
      );
      setIsOptionsIn(newList);
      setAllData(newList);
    },
    [allData]
  );

  // remove the option in options and add them into FilteredData
  const remove = useCallback(
    (option: OptionType) => {
      setupOption(option, false);
      const remainingData = data.filter((opt) => opt.id !== option.id);
      setData(remainingData);
    },
    [data, setupOption]
  );

  const selectOne = useCallback(
    (option: OptionType) => {
      const newList = allData.map((opt) =>
        opt.id === option.id
          ? {...opt, isChecked: true}
          : {...opt, isChecked: false}
      );
      setIsOptionsIn(newList);
      setAllData(newList);
    },
    [allData]
  );

  // select options and move to Data field  based on isMulti or not
  const handleSelect = useCallback(
    (option: OptionType) => {
      setupOption(option, true);

      const isAvailable = (optionCheck: OptionType) => {
        const isAvailableData =
          data.length && data.find((opt) => opt.id === optionCheck.id);
        if (isAvailableData) {
          setupOption(optionCheck, false);
          return true;
        }
        return false;
      };

      if (isAvailable(option)) {
        remove(option);
      } else if (isMulti) {
        setData([{...option, isChecked: true}, ...data]);
      } else {
        selectOne(option);
        setData([{...option, isChecked: true}]);
        setIsActive(false);
      }
      setSearchValue('');
    },

    [data, selectOne, setupOption, isMulti, remove]
  );

  // Clearing all filtered data
  const clearAll = useCallback(() => {
    setData([]);
    setAllData(optionsMark);
    setIsOptionsIn(optionsMark);
  }, [optionsMark]);
  return (
    <div className='select-field' ref={domNode}>
      <div
        className={`select-field-container ${isActive && 'focus-input'}`}
        data-testid='select-container'
        role='button'
        tabIndex={0}
        onClick={handleActive}
        onKeyPress={handleActive}>
        <div className='select-field-container-btn'>
          {data?.map((opt) => (
            <div
              key={opt.id}
              className={`filtered-options ${
                isMulti ? 'select-field-container-btn-filters' : 'single-filter'
              }`}>
              <div data-testid='filtered' className='filtered-select'>
                {opt.imageName && (
                  <div className='filtered-img' data-testid='filtered-img'>
                    <DynamicImage imgName={opt.imageName} />
                  </div>
                )}
                <div> {opt.tag}</div>
              </div>

              {isMulti && <span className='filter-divider' />}
              {isMulti && (
                <button
                  className='filter-button'
                  data-testid={opt.tag}
                  onClick={() => remove({...opt, isChecked: true})}
                  type='button'>
                  <CloseIcon width='9' height='9' fill='black' />
                </button>
              )}
            </div>
          ))}
          {data.length === 0 && !isActive && (
            <div className='label'>{label}</div>
          )}

          {isSearch && data.length !== options.length && isActive && (
            <input
              className='select-field-container-btn-input'
              data-testid='select-searchbox'
              type='text'
              onChange={inputHandler}
              value={searchValue}
              placeholder={isActive && placeholder}
            />
          )}
        </div>
        <div className={`end-clear-box ${isActive && 'focus-bold'}`}>
          {data.length > 0 && clearAllBtn && (
            <button
              type='button'
              data-testid='clear'
              className='clear-all'
              onClick={clearAll}>
              <CloseIcon width='12' height='12' fill='black' />
            </button>
          )}
          {clearAllBtn && data.length !== 0 && <span className='divider' />}
          <button
            type='button'
            onClick={handleDropDown}
            className={`down-icon ${!clearAllBtn ? 'ml-2' : 'm-0'} ${
              isActive && 'up-icon'
            }`}>
            {downIcon}
          </button>
        </div>
      </div>
      {isActive && optionsIn.length > 0 && (
        <div
          className={`select-field-content ${isDropUp && 'bottom-top'}`}
          data-testid='options'>
          {optionsIn.map((option) => (
            <div
              key={option.id}
              className={`select-field-content-item ${
                option.isChecked && 'item-bg'
              }`}>
              {isCheckBoxes && (
                <div className='checkbox' data-testid='item-checkbox'>
                  <Checkbox
                    id={option.id.toString()}
                    name='checkbox'
                    onChange={() => handleSelect(option)}
                    checked={option.isChecked}
                    color={checkBoxCheckedColor}
                    size={checkBoxSize}
                  />
                </div>
              )}
              {option.imageName && (
                <div
                  className={`select-img ${isCheckBoxes && 'ml-2'}`}
                  data-testid='option-img'>
                  <DynamicImage imgName={option.imageName} />
                </div>
              )}
              <button
                type='button'
                id={option.tag}
                data-testid='field'
                onClick={() => handleSelect(option)}>
                {option.tag}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SelectField.defaultProps = {
  label: '',
  isSearch: false,
  isMulti: false,
  placeholder: 'Search',
  clearAllBtn: false,
  maxMenuHeight: 200,
  eachOptionHeight: 36,
  isCheckBoxes: false,
  checkBoxCheckedColor: 'green',
  checkBoxSize: 'medium',
  downIcon: <DownIcon />,
};

export default memo(SelectField);
