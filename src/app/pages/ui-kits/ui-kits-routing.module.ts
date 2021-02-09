import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// UI Kits
import { UiKitAntdComponent } from 'src/app/pages/ui-kits/antd/antd.component'
import { UiKitBootstrapComponent } from 'src/app/pages/ui-kits/bootstrap/bootstrap.component'
import { KitAntdAffixExampleComponent } from './antd/examples/affix/affix.component'
import { KitAntdAlertExampleComponent } from './antd/examples/alert/alert.component'
import { KitAntdAnchorExampleComponent } from './antd/examples/anchor/anchor.component'
import { KitAntdAutoCompleteExampleComponent } from './antd/examples/autocomplete/autocomplete.component'
import { KitAntdAvatarExampleComponent } from './antd/examples/avatar/avatar.component'
import { KitAntdBackTopExampleComponent } from './antd/examples/backtop/backtop.component'
import { KitAntdBadgeExampleComponent } from './antd/examples/badge/badge.component'
import { KitAntdBreadcrumbExampleComponent } from './antd/examples/breadcrumb/breadcrumb.component'
import { KitAntdButtonExampleComponent } from './antd/examples/button/button.component'
import { KitAntdCalendarExampleComponent } from './antd/examples/calendar/calendar.component'
import { KitAntdCardExampleComponent } from './antd/examples/card/card.component'
import { KitAntdCarouselExampleComponent } from './antd/examples/carousel/carousel.component'
import { KitAntdCascaderExampleComponent } from './antd/examples/cascader/cascader.component'
import { KitAntdCheckboxExampleComponent } from './antd/examples/checkbox/checkbox.component'
import { KitAntdCollapseExampleComponent } from './antd/examples/collapse/collapse.component'
import { KitAntdCommentExampleComponent } from './antd/examples/comment/comment.component'
import { KitAntdDatePickerExampleComponent } from './antd/examples/datepicker/datepicker.component'
import { KitAntdDividerExampleComponent } from './antd/examples/divider/divider.component'
import { KitAntdDrawerExampleComponent } from './antd/examples/drawer/drawer.component'
import { KitAntdDropdownExampleComponent } from './antd/examples/dropdown/dropdown.component'
import { KitAntdFormExampleComponent } from './antd/examples/form/form.component'
import { KitAntdGridExampleComponent } from './antd/examples/grid/grid.component'
import { KitAntdIconExampleComponent } from './antd/examples/icon/icon.component'
import { KitAntdInputExampleComponent } from './antd/examples/input/input.component'
import { KitAntdInputNumberExampleComponent } from './antd/examples/inputnumber/inputnumber.component'
import { KitAntdLayoutExampleComponent } from './antd/examples/layout/layout.component'
import { KitAntdListExampleComponent } from './antd/examples/list/list.component'
import { KitAntdMentionExampleComponent } from './antd/examples/mention/mention.component'
import { KitAntdMenuExampleComponent } from './antd/examples/menu/menu.component'
import { KitAntdMessageExampleComponent } from './antd/examples/message/message.component'
import { KitAntdModalExampleComponent } from './antd/examples/modal/modal.component'
import { KitAntdPaginationExampleComponent } from './antd/examples/pagination/pagination.component'
import { KitAntdPopconfirmExampleComponent } from './antd/examples/popconfirm/popconfirm.component'
import { KitAntdPopoverExampleComponent } from './antd/examples/popover/popover.component'
import { KitAntdProgressExampleComponent } from './antd/examples/progress/progress.component'
import { KitAntdRadioExampleComponent } from './antd/examples/radio/radio.component'
import { KitAntdRateExampleComponent } from './antd/examples/rate/rate.component'
import { KitAntdSelectExampleComponent } from './antd/examples/select/select.component'
import { KitAntdSkeletonExampleComponent } from './antd/examples/skeleton/skeleton.component'
import { KitAntdSliderExampleComponent } from './antd/examples/slider/slider.component'
import { KitAntdSpinExampleComponent } from './antd/examples/spin/spin.component'
import { KitAntdStepsExampleComponent } from './antd/examples/steps/steps.component'
import { KitAntdSwitchExampleComponent } from './antd/examples/switch/switch.component'
import { KitAntdTableExampleComponent } from './antd/examples/table/table.component'
import { KitAntdTabsExampleComponent } from './antd/examples/tabs/tabs.component'
import { KitAntdTagExampleComponent } from './antd/examples/tag/tag.component'
import { KitAntdTimelineExampleComponent } from './antd/examples/timeline/timeline.component'
import { KitAntdTimePickerExampleComponent } from './antd/examples/timepicker/timepicker.component'
import { KitAntdTooltipExampleComponent } from './antd/examples/tooltip/tooltip.component'
import { KitAntdTransferExampleComponent } from './antd/examples/transfer/transfer.component'
import { KitAntdTreeExampleComponent } from './antd/examples/tree/tree.component'
import { KitAntdTreeSelectExampleComponent } from './antd/examples/treeselect/treeselect.component'
import { KitAntdUploadExampleComponent } from './antd/examples/upload/upload.component'

const routes: Routes = [
  {
    path: 'antd',
    component: UiKitAntdComponent,
    children: [
      {
        path: '',
        redirectTo: 'Button',
        pathMatch: 'full',
      },
      {
        path: 'Button',
        component: KitAntdButtonExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Icon',
        component: KitAntdIconExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Grid',
        component: KitAntdGridExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Layout',
        component: KitAntdLayoutExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Avatar',
        component: KitAntdAvatarExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Badge',
        component: KitAntdBadgeExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Comment',
        component: KitAntdCommentExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Collapse',
        component: KitAntdCollapseExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Carousel',
        component: KitAntdCarouselExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Card',
        component: KitAntdCardExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Calendar',
        component: KitAntdCalendarExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'List',
        component: KitAntdListExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Popover',
        component: KitAntdPopoverExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Tree',
        component: KitAntdTreeExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Tooltip',
        component: KitAntdTooltipExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Timeline',
        component: KitAntdTimelineExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Tag',
        component: KitAntdTagExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Tabs',
        component: KitAntdTabsExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Table',
        component: KitAntdTableExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'AutoComplete',
        component: KitAntdAutoCompleteExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Checkbox',
        component: KitAntdCheckboxExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Cascader',
        component: KitAntdCascaderExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'DatePicker',
        component: KitAntdDatePickerExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Form',
        component: KitAntdFormExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'InputNumber',
        component: KitAntdInputNumberExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Input',
        component: KitAntdInputExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Mention',
        component: KitAntdMentionExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Rate',
        component: KitAntdRateExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Radio',
        component: KitAntdRadioExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Switch',
        component: KitAntdSwitchExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Slider',
        component: KitAntdSliderExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Select',
        component: KitAntdSelectExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'TreeSelect',
        component: KitAntdTreeSelectExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Transfer',
        component: KitAntdTransferExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'TimePicker',
        component: KitAntdTimePickerExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Upload',
        component: KitAntdUploadExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Alert',
        component: KitAntdAlertExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Drawer',
        component: KitAntdDrawerExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Modal',
        component: KitAntdModalExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Message',
        component: KitAntdMessageExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Notification',
        component: KitAntdTimePickerExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Progress',
        component: KitAntdProgressExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Popconfirm',
        component: KitAntdPopconfirmExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Spin',
        component: KitAntdSpinExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Skeleton',
        component: KitAntdSkeletonExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Affix',
        component: KitAntdAffixExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Breadcrumb',
        component: KitAntdBreadcrumbExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Dropdown',
        component: KitAntdDropdownExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Menu',
        component: KitAntdMenuExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Pagination',
        component: KitAntdPaginationExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Steps',
        component: KitAntdStepsExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Anchor',
        component: KitAntdAnchorExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'BackTop',
        component: KitAntdBackTopExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
      {
        path: 'Divider',
        component: KitAntdDividerExampleComponent,
        data: { title: 'UI Kit / Antd' },
      },
    ],
  },
  {
    path: 'bootstrap',
    component: UiKitBootstrapComponent,
    data: { title: 'UI Kit / Bootstrap' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIKitsRouterModule {}
