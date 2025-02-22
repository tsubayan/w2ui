jQuery(function () {
    jQuery('#toolbar').w2toolbar({
        name: 'toolbar',
        routeData: { id: 5, vid: '40-43' },
        tooltip: 'top',
        items: [
            { type: 'button', id: 'item1.0', text: 'BTN', img: 'icon-page', tooltip: function () { return (new Date()).getTime(); }},
            {
                            type: 'menu-radio', id: 'menu-stato',
                            text: function (item) {
                                return 'Status: ' + item.get(item.selected).text;
                            },
                            selected: 'ALL',
                            items: [
                                { id: 'ALL', text: 'All Statuses' },
                                { id: 'NEW', text: 'New' },
                                { id: 'WIP', text: 'Work in progress' },
                                { id: 'LAV', text: 'Working on it' }
                            ]
                        },
            { type: 'check', id: 'item1.1', text: 'Check', img: 'icon-page', tooltip: function () { return (new Date()).getTime(); },
                checked: true, route: '/project' },
            { type: 'drop',  id: 'item12', img: 'icon-page', icon: 'fa fa-star', tooltip: 'Drop button',
                html: '<div style="padding: 10px">Some html text</div>', route: '/project/:id/go', count: 4 },
            { type: 'break', id: 'break0' },
            { type: 'menu',  id: 'item2', text: 'Drop Down', img: 'icon-folder', icon: 'fa fa-camera', tooltip: 'Menu button',
                items0: function(el) {
                    return [
                        { id: 'item1', icon: 'fa fa-link', text: 'item ' + Math.round(Math.random()*100) },
                        { id: 'item2', icon: 'fa fa-star', text: 'item ' + Math.round(Math.random()*100) }
                    ]
                },
                items2: [
                    { text: 'Item 1', img: 'icon-page', route: '/project/:id/item1', tooltip: 'some' },
                    { text: 'Item 2', img: 'icon-page', route: '/project/:id/item2', disabled: true },
                    { text: 'Item 3', value: 'Item Three', img: 'icon-page', route: '/project/:id/item2' }
                ],
                items: [
                    { id: '1', text: 'Item 1', img: 'icon-page', tooltip: 'some' },
                    { id: '2', text: 'Item 2', img: 'icon-page', disabled: true },
                    { id: '3', text: '--divider' },
                    { id: '4', img: 'icon-folder', text: 'item 1', expanded: true,
                        items: (el) => {
                            return [
                                { id: el.id + 'item1', icon: 'fa fa-link', text: 'item ' + Math.round(Math.random()*100), keepOpen: true },
                                { id: el.id + 'item2', icon: 'fa fa-star', text: 'item ' + Math.round(Math.random()*100) }
                            ]
                        },
                        items1: [
                            { id: '4-1', icon: 'fa fa-star', text: 'item 4-1', group: 1, keepOpen: true },
                            { id: '4-2', icon: 'fa fa-star', text: 'item 4-2', group: 1, keepOpen: true },
                            { id: '4-3', icon: 'fa fa-star', text: 'item 4-3', group: 1, keepOpen: true }
                        ]
                    },
                    { id: '5a', img: 'icon-folder', text: 'item 2a',
                        items: [
                            { id: '5a-1', icon: 'fa fa-user', text: 'item 1', keepOpen: true },
                            { id: '5a-2', icon: 'fa fa-star-o', text: 'Medium long', keepOpen: true },
                            { id: '5a-3', icon: 'fa fa-star', text: 'no icon' },
                            { id: '5a-3', icon: 'fa fa-star-o',text: 'Some items' },
                            { id: '5a-4', icon: 'fa fa-user', text: 'Font <i>item</i> with' },
                            { id: '5a-5', icon: 'fa fa-link', text: 'item 5' },
                            { id: '5a-3', icon: 'fa fa-star', text: 'item 6' }
                        ]
                    },
                    { id: '5', img: 'icon-folder', text: 'item 2',
                        items: [
                            { id: '5-1', icon: 'fa fa-user', text: 'item 1' },
                            { id: '5-2', icon: 'fa fa-star-o', text: 'Medium long' },
                            { id: '5-3', text: 'no icon' },
                            { id: '5-3', text: '5- 3', disabled: true },
                            { id: '5-4', icon: 'fa fa-user', text: 'item 4' },
                            { text: '--' },
                            { id: '5-5', icon: 'fa fa-link', text: 'item 5' },
                            { id: '5-3', icon: 'fa fa-star', text: 'item 6' }
                        ]
                    },
                    { id: '6', img: 'icon-folder', text: 'no items',
                        items: []
                    },
                    { id: '7', text: 'Item 7', img: 'icon-page', tooltip: 'some' },
                    { id: '8', text: 'Item 8', img: 'icon-page', disabled: true },
                    { id: '9', text: 'Item 9', img: 'icon-page', tooltip: 'some' },
                ],
                overlay: {
                    // search: true,
                    menuStyle: 'top: 30px; bottom: 30px',
                    topHTML: `<div style="padding: 10px; height: 30px; border-bottom: 1px solid silver;">top html</div>
                            <div style="position: absolute; bottom: 0px; left: 0px; right: 0px; padding: 10px; height: 30px; border-top: 1px solid silver;">positioned here</div>`,
                    onShow(event) {
                        console.log('open popup', event)
                    }
                }
            },
            { type: 'new-line' },
            { type: 'menu',   id: 'item.2a@', img: 'icon-folder', icon: 'fa fa-heart', tooltip: 'This is some long tooltip',
                items: [
                    { id: 'item1', text: 'First Item', count: 3, icon: 'fa fa-heart' },
                    { id: 'item2', text: 'Item 2', icon: 'fa fa-user', count: 12 },
                    { id: 'item3', text: 'Item 3', icon: 'fa fa-star-o' },
                    { id: 'item4', text: 'Item 4', icon: 'fa fa-link', hotkey: '⌘A' },
                    { id: 'item5', text: 'Without Image, Just Text', hotkey: '⌘B' }
                ], overlay: { top1: 10 }
            },
            { type: 'menu-check', id: 'menucheck', text: 'Menu: Check',
                items: () => [
                    { id: 'item1', text: 'Item 1.1', count: 3, icon: 'fa fa-heart' },
                    { id: 'item2', text: 'Item 1.2', icon: 'fa fa-user', count: 12, checked: true },
                    { id: 'item3', text: 'Item 1.3', icon: 'fa fa-star-o', hotkey: '⌘S' },
                    { text: '--Group Name' },
                    { id: 'item4', text: 'Item 2.1', group: '2', icon: 'fa fa-link' },
                    { id: 'item5', text: 'Item 2.2', group: '2', icon: 'fa fa-link' },
                    { id: 'item6', text: 'Item 2.3', group: '2', icon: 'fa fa-link' },
                    { text: '--' },
                    { id: 'item6', text: 'Link', group: false, icon: 'fa fa-link' }
                ],
            },
            { type: 'menu-radio', id: 'menu.radio', text: 'Menu: Radio',
                items: () => [
                    { id: 'item1', text: 'First Item', count: 3, icon: 'fa fa-heart' },
                    { text: '--' },
                    { id: 'item2', text: 'Item 2', icon: 'fa fa-user', count: 12 },
                    { id: 'item3', text: 'Item 3', icon: 'fa fa-star-o' },
                    { text: '--Group' },
                    { id: 'item4', text: 'Item 4', icon: 'fa fa-link', hotkey: 'L', remove: true },
                    { id: 'item1a', text: 'First Item', count: 3, icon: 'fa fa-heart', remove: true },
                    { text: '-- more' },
                    { id: 'item2a', text: 'Item 2', icon: 'fa fa-user', count: 12 },
                    { id: 'item3a', text: 'Item 3', icon: 'fa fa-star-o' },
                    { text: '--' },
                    { id: 'item4a', text: 'Item 4', icon: 'fa fa-link', count: 'k', remove: false }
                ],
                overlay: {
                    hideOnRemove: true,
                }
            },
            { type: 'break', id: 'break1' },
            { type: 'radio',  id: 'item3',  group: '1', text: 'Radio 1', icon: 'fa fa-user', img1: 'icon-add', checked: true,
                tooltip: 'This is some long tooltip', route: '/project/:id/view/:vid', style: "width: 100px; text-align: center",
            },
            { type: 'radio',  id: 'item4',  group: '1', text: 'Radio 2', icon: 'fa fa-users', img1: 'icon-add', disabled: false, count: 55,
                tooltip: 'This is some long tooltip', route: '/project/:id/drop down/:vid/:id', style: "width: 100px; text-align: center",
            },
            { type: 'break' },
            { type: 'drop', id: 'item7', text: 'drop button', img: 'icon-folder',
                tooltip: 'This is some <br/>very very<br/> very very<br/> very veryt long tooltip',
                html : '<div style="padding: 10px; font-size: 11px">some html</div>',
                route: 'another/project'
            },
            { type: 'button',  id: 'itemT',  text: 'Just Text', count: '1', tooltip: 'This is some very very very very very veryt long tooltip' },
            { type: 'color', id: 'item8', text1: 'Color', icon1: 'fa fa-star', tooltip: 'Color', transparent: true, color: '888888' },
            { type: 'text-color', id: 'item9', text1: 'Text Color', icon1: 'fa fa-star', tooltip: 'Text Color', transparent: true, color: 'FF9838' },
            { type: 'spacer' },
            { type: 'button',  id: 'item5',  text: 'Item 5', img: 'icon-page', disabled: true, tooltip: 'This is some very very very very very veryt long tooltip' },
            { type: 'button',  id: 'item6',  text: 'Item 6', img: 'icon-page', tooltip: 'This is some very very very very very veryt long tooltip' },
            { type: 'menu-radio', id: 'menu.radio2', text: 'Menu: Radio',
                 items: [
                    { id: 'item1', text: 'First Item', count: 3, icon: 'fa fa-heart' },
                    { text: '--' },
                    { id: 'item2', text: 'Item 2', icon: 'fa fa-user', count: 12, checked: true },
                    { id: 'item3', text: 'Item 3', icon: 'fa fa-star-o', checked: true },
                    { text: '--' },
                    { id: 'item4', text: 'Item 4', icon: 'fa fa-link', hotkey: '⌘L' },
                    { id: 'item1a', text: 'First Item', count: 3, icon: 'fa fa-heart' },
                    { text: '--' },
                    { id: 'item2a', text: 'Item 2', icon: 'fa fa-user', count: 12, checked: true },
                    { id: 'item3a', text: 'Item 3', icon: 'fa fa-star-o', checked: true },
                    { text: '--' },
                    { id: 'item4a', text: 'Item 4', icon: 'fa fa-link', hotkey: '⌘L' }
                ],
            },

        ],
        onClick: function (event) {
            console.log(event, this.get(event.target))
        }
    });
});

function changeTab() {
    w2ui['tabs'].get('tab2').text = '<div style="width: 300px">new and long</div>';
    w2ui['tabs'].refresh();
}