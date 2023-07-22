import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const activeTabClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  const onClickChangeActiveTabId = () => {
    updateActiveTabId(tabDetails.tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={activeTabClassName}
        type="button"
        onClick={onClickChangeActiveTabId}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
