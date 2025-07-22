import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useParams} from 'react-router';

import './Tabs.scss';

export interface valuesTypes {
  id: number | string;
  tabName?: string;
  tabContent?: ReactNode;
  icon?: ReactNode;
}

export interface ITabsProps {
  values: valuesTypes[];
  onChange: (id: string | number) => void;
  activeTab?: number | string;
  inactiveTab?: number | string;
  border?: boolean;
  centered?: boolean;
  vertical?: boolean;
  iconPosition?: 'top' | 'left' | 'right' | 'bottom';
  activeTabColor?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info';
}

function Tabs(props: ITabsProps) {
  const {
    values,
    onChange,
    activeTab,
    inactiveTab,
    border,
    centered,
    vertical,
    iconPosition,
    activeTabColor,
  } = props;

  const param = useParams();
  const availablePath: string[] = values?.map((el) => el?.id?.toString());

  // active tab data kept in it default it activeTab = 1
  // if inactiveTab = 1  then this func do activeTab = 2

  const findActiveTab = useCallback(() => {
    for (let i = 0; i < values.length; i += 1) {
      if (values[i].id !== inactiveTab && inactiveTab === 1) {
        return values[i].id;
      }
    }
    return activeTab;
  }, [values, inactiveTab, activeTab]);

  const [activeTabShow, setActiveTabShow] = useState(findActiveTab());

  // click on Tab buttons active the tab
  const handleTabClick = useCallback(
    (tab: valuesTypes) => {
      setActiveTabShow(tab.id);
      onChange(tab.id);
    },
    [onChange]
  );

  // this fn handle the tabNames buttons and disable
  const tab = useMemo(
    () =>
      values.map((value, index) => (
        <button
          type='button'
          key={`${value.id}${index + 1}`}
          className={`tab-button fw-6 ${
            activeTabShow === value.id &&
            `tab-active tab-${activeTabColor}  ${
              vertical
                ? `tab-vertical-${activeTabColor}`
                : `tab-horizontal-${activeTabColor}`
            }`
          }`}
          onClick={() => handleTabClick(value)}
          disabled={inactiveTab === value.id}>
          <div className={`button-content-${iconPosition}Icon`}>
            <div data-testid='tab-icon'>{value.icon}</div>
            <div>{value.tabName}</div>
          </div>
        </button>
      )),
    [
      values,
      iconPosition,
      vertical,
      activeTabShow,
      inactiveTab,
      handleTabClick,
      activeTabColor,
    ]
  );

  // this fn display the content based on activeTab 'id'
  const tabPanel = useMemo(
    () =>
      values.map(
        (value, index) =>
          value.id === activeTabShow && (
            <div key={`${value.id}${index + 1}`}>{value.tabContent}</div>
          )
      ),
    [values, activeTabShow]
  );

  useEffect(() => {
    if (param?.view && availablePath?.includes(param?.view)) {
      setActiveTabShow(param.view);
    }
  }, [param.view, availablePath]);

  return (
    <div
      className={`tab-container ${vertical && 'tab-vertical'}`}
      data-testid='tabs-container'>
      <div
        className={`tab ${
          border && (vertical ? 'tab-border-vertical' : 'tab-border-horizontal')
        } ${centered && 'tab-center'}`}>
        {tab}
      </div>
      <div
        data-testid={activeTabShow}
        className={`${
          vertical ? 'tab-content-vertical' : 'tab-content-horizontal'
        }`}>
        {tabPanel}
      </div>
    </div>
  );
}

Tabs.defaultProps = {
  activeTab: 1,
  inactiveTab: -1,
  border: true,
  centered: false,
  vertical: false,
  iconPosition: 'top',
  activeTabColor: 'primary',
};

export default memo(Tabs);
