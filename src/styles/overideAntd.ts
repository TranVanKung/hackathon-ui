import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  theme?: any;
}

const OverideAntdStyle = createGlobalStyle`
  /* input */
  .ant-input {
    background-color: rgba(133, 122, 233, 0.15) !important;
    border-color: transparent !important;

    &:hover, &:focus {
      border-color: var(--color-primary) !important;
      box-shadow: none !important;
    }
  }

  /* date picker */
  .ant-picker-focused {
    border: 1px solid var(--color-primary) !important;
    outline: none !important;
    box-shadow: none !important;
  }

  .ant-picker-cell-inner {
    white-space: nowrap;
  }

  .ant-picker-cell-selected, .ant-picker-cell-range-end, .ant-picker-cell-range-start {
    .ant-picker-cell-inner {
      background: var(--color-primary) !important;
      color: white !important;
    }
  }

  .ant-picker-cell-today {
    .ant-picker-cell-inner {
      &::before {
        border: 1px solid var(--color-primary) !important;
      }
    }
  }

  .ant-picker-active-bar {
    background: var(--color-primary) !important;
  } 

  .ant-picker-month-panel {
    .ant-picker-cell-inner {
      width: 65px !important;
    }
  }

  /* radio */
  .ant-radio-inner::after {
    background-color: var(--color-primary) !important;
  }

  .ant-radio-checked, .ant-radio:hover {
    .ant-radio-inner {
      border-color: var(--color-primary) !important;
    }
  }

  .ant-dropdown-menu-item-selected {
    color: var(--color-primary) !important;
    background-color: var(--background-primary) !important;
  }

  /* table */
  .ant-table-filter-trigger.active, .ant-table-column-sorter-up.active {
    color: var(--color-primary) !important;
  }

  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: var(--background-primary) !important;
  }

  .ant-table-cell {
    font-size: 1.4rem;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
      font-weight: 500;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
  }

  .ant-table-column-sorter-down.active {
    color: var(--color-primary) !important;
  }

  .ant-dropdown-open {
    .anticon-search {
      color: var(--color-primary) !important;
    }  
  }

  /* pagination */
  .ant-pagination-item:hover {
    border-color: var(--color-primary) !important;

    a {
      color: var(--color-primary) !important;
    }
  }

  .ant-pagination-item-active {
    background-color: var(--color-primary) !important;
    border-color: var(--color-primary) !important;

    &:hover {
      border-color: var(--color-primary) !important;
      opacity: 0.8;

      a {
        color: white !important;
      }
    }

    a {
      color: white !important;
    }
  }

  .ant-pagination-item-link-icon {
    color: var(--color-primary) !important;
  }

  .ant-pagination-next:hover, .ant-pagination-prev:hover {
    .ant-pagination-item-link {
      border-color: var(--color-primary) !important;
      color: var(--color-primary) !important;
    }
  }

  .ant-btn {
    font-size: 1.2rem !important;

    @media only screen and (max-width: 550px) {
      font-size: 1rem !important;
    }
  }

  .ant-btn-primary {
    background: var(--color-primary) !important;
    color: var(--color-text-white) !important;
    border-color: transparent !important;

    &:hover {
      color: var(--color-text-white) !important;
    }
  }

  .ant-form-item {
    margin-bottom: 1rem !important;
  }

  .ant-form-item-label > label {
    font-size: 1.5rem;
    font-weight: 500;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
  }

  /* switch */
  .ant-switch-checked {
    background-color: var(--color-primary) !important;
  }

  .ant-switch-inner {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  /* checkbox */
  .ant-checkbox:hover {
    .ant-checkbox-inner {
      border-color: var(--color-primary) !important;
    }
  }

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--color-primary) !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--color-primary) !important; 
    border-color: var(--color-primary) !important;
  }

  .ant-checkbox-checked::after {
    border: 1px solid transparent !important;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: var(--color-primary) !important;
  }

  .ant-collapse-header {
    font-weight: 500;
    font-size: 1.6rem;

    @media only screen and (max-width: 834px) {
      font-size: 1.5rem;
    }
  }

  .ant-collapse-content-box {
    font-size: 1.6rem;
    line-height: 2;
    padding: 1.6rem !important;

    @media only screen and (max-width: 834px) {
      font-size: 1.5rem;
    }
  }

  .ant-collapse-content {
    background-color: rgba(20, 20, 20, 0.6) !important;
  }

  .ant-select-focused {
    border: 1px solid var(--color-primary) !important;
    outline: none !important;
    border-radius: 0.4rem !important;
    box-shadow: none !important;

    .ant-select-selector {
      border: 1px solid transparent !important;
    }
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: var(--color-primary) !important;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none !important;
    border-color: transparent !important;
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: var(--background-primary) !important;
  }

  /* step */
  .ant-steps-item-process {
    .ant-steps-item-icon {
      background: var(--color-primary) !important;
      border-color: var(--color-primary) !important;
    }
  }

  .ant-steps-item-finish {
    .ant-steps-item-icon {
      border-color: var(--color-primary) !important;

      .ant-steps-icon {
        color: var(--color-primary) !important;
      }
    }
  }

  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
    background-color: var(--color-primary) !important;
  }

  /* spin */
  .ant-spin-dot-item {
    background-color: var(--color-primary) !important;
  }

  /* drawer */
  .ant-drawer-header {
    @media only screen and (max-width: 550px) {
      padding: 2rem 1rem !important;
    }
  }

  .ant-drawer-title {
    @media only screen and (max-width: 550px) {
      font-size: 1.4rem;
    }
  }

  .ant-drawer-body {
    @media only screen and (max-width: 550px) {
      padding: 2rem !important;
    }

    @media only screen and (max-width: 420px) {
      padding: 2rem 1rem !important;
    }
  }

  /* tab */
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--color-primary) !important;
  }

  .ant-tabs-tab:hover {
    color: var(--color-primary) !important;
  }

  .ant-tabs-ink-bar {
    background: var(--color-primary) !important;
  }

  /* editor */
  .rdw-editor-toolbar {
    background: transparent !important;
    border: 1px solid transparent !important;
  }
`;

export { OverideAntdStyle };
