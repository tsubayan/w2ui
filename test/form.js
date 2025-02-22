jQuery(() => {
    jQuery('#form').w2form({
        name      : 'form',
        // routeData : { id: 4 },
        url       : { get1: 'http://w2ui.com', save: 'http://w2ui.com' },
        // page      : 2,
        // url       : 'form.php',
        // formURL   : 'form-template.html',
        recid    : 4,
        header   : 'Edit header',
        style1   : 'border: 1px solid red;',
        // pageStyle: 'height: 200px',
        page: 0,
        tabs: [
            { id: 'tab1', text: 'General' },
            { id: 'tab2', text: 'Inputs' },
            { id: 'tab3', text: 'HTML' }
        ],
        onProgress: function (event) {
            event.preventDefault();
        },
        toolbar: {
            items: [
                { type: 'button', id: 'button1', text: 'Button1', icon: 'w2ui-icon-search' },
                { type: 'break' },
                { type: 'check', id: 'button2', text: 'Button2', img: 'icon-page' },
                { type: 'check', id: 'button3', text: 'Button3', img: 'icon-page' },
                { type: 'spacer' },
                { type: 'button', id: 'save', text: 'Save', img: 'icon-folder' }
            ]
        },
        record: {
            field: {
                "toggle"  : '0',
                "text"    : 'some text',
                "textarea": 'more text',
                "date"    : '1/15/2014',
                "time"    : '10:11 am',
                "color"   : '999999',
                "list"    : 5,
                "combo"   : { id: 1, text: 'Item 1' },
                "enum"    : [{ id: '1', text: 'item 1'}, { id: 2, text: 'item 2'}],
                "file"    : [{ name: 'file.txt', size: 3033, type: 'text', modified: '1/1/2014' }],
                "email"   : 'see@mail.com',
                "password": 'pass',
                // "int"     : '10',
                "float"   : '20',
                "money"   : '30',
                "currency": '40',
                "percent" : '50',
                "alpha"   : '60',
                "select"  : 'second',
                "check"   : 33,
                "check3"  : [-1,0,2],
                "radio"   : '1'
            }
        },
        focus: -1,
        fields: [
            // first page
            { field: 'field.html', type: 'html', required: true,
                html: {
                    html: 'dfdf',
                    attr: 'style="padding: 5px"',
                    group: 'General',
                    groupCollapsible: true
                }
            },
            { field: 'field.text', type: 'text', required: true, html: { attr: 'style="width: 300px"' }, hidden1: true },
            { field: 'field.textarea', type: 'textarea', required: true, html: { attr: 'style="width: 300px"' },
                html: {
                    group: 'Other'
                }
            },
            { field: 'field.date', type: 'date', required: false, html: { attr: 'style="width: 90px"' } },
            { field: 'field.time', type: 'time', required: false, html: { attr: 'style="width: 90px"' } },
            { field: 'field.color', type: 'color', required: true, html: { attr: 'style="width: 90px"' } },
            { field: 'field.list', type: 'list', required: true, html: { group: 'Dropdowns', groupCollapsable: true },
                options: {
                    match: 'contains',
                    compare: function (item) {
                        if (item.id < 4) return false;
                    },
                    items: function(el) {
                        return [
                            { id: 'item1', icon: 'fa fa-link', text: 'item ' + Math.round(Math.random()*100) },
                            { id: 'item2', icon: 'fa fa-star', text: 'item ' + Math.round(Math.random()*100) }
                        ]
                    },
                    items1: [
                        { id: 0, text: 'Pickle, Susan' },
                        { id: 1, text: 'Adams, John' },
                        { id: 2, text: 'Openhimer, Peter' },
                        { id: 3, text: 'Woznyak, Steve' },
                        { id: 4, text: 'Rusevelt, Franklin' },
                        { id: 5, text: 'Stalone, Silvester' },
                        { id: 6, text: 'Mann, Fred' },
                        { id: 6, text: 'Ford, Mary' },
                        { id: 8, text: 'Purky, Mon' },
                        { id: 9, text: 'Min, Hla' }
                    ]
                }
            },
            { field: 'field.combo', type: 'combo', required: false,
                options: {
                    applyFilter: false,
                    items: function(el) {
                        return [
                            { id: 'item1', icon: 'fa fa-link', text: 'item ' + Math.round(Math.random()*100) },
                            { id: 'item2', icon: 'fa fa-star', text: 'item ' + Math.round(Math.random()*100) }
                        ]
                    },
                    // url : 'listdat.json'
                }
            },
            { field: 'field.enum', type: 'enum', required: false,
                html: { attr: 'style="width: 400px"' },
                options: {
                    items: function (el) {
                        return [
                            { id: 'item1', icon: 'fa fa-link', text: 'item ' + Math.round(Math.random()*100) },
                            { id: 'item2', icon: 'fa fa-star', text: 'item ' + Math.round(Math.random()*100) }
                        ]
                    },
                    items1: [{id: 1, text: 'Adams, John'}, 'Johnson, Peter', 'Lewis, Frank', 'Cruz, Steve', 'Donnun, Nick']
                }
            },
            { field: 'field.file', type: 'file', required: false, html: { attr: 'style="width: 400px"' } },
            // second page
            { field: 'field.email', type: 'email', required: true, html: { page: 1 } },
            { field: 'field.password', type: 'pass', required: false, html: { page: 1 } },
            { field: 'field.int', type: 'int', options: { arrows: true, max: 100, autoCorrect: true }, required: false, html: { page: 1 } },
            { field: 'field.float', type: 'float', required: false, html: { page: 1 } },
            { field: 'field.money', type: 'money', required: false, html: { page: 1 } },
            { field: 'field.currency', type: 'currency', required: false, html: { page: 1 } },
            { field: 'field.percent', type: 'percent', required: false, html: { page: 1 } },
            { field: 'field.alpha', type: 'alphanumeric', required: false, html: { page: 1 } },
            // third page
            { field: 'field.select', type: 'select', required: false, options: { items: ['fist', 'second'] }, html: { page: 2 } },
            { field: 'field.toggle', type: 'toggle', required: false, html: { page: 2 } },
            { field: 'field.check', type: 'checkbox', required: false, html: { page: 2, text: 'Options' } },
            { field: 'field.check2', type: 'checkbox', required: false, html: { page: 2, label: 'Some long text for checkbox' } },
            { field: 'field.check3', type: 'checks', required: false,
                html: {
                    page: 2,
                    label: 'List of Checks'
                },
                options: {
                    items: [
                        { id: -2, text: 'Pickle, Susan' },
                        { id: -1, text: 'Adams, John' },
                        { id: 0, text: 'Openhimer, Peter' },
                        { id: 1, text: 'Woznyak, Steve' },
                        { id: 2, text: 'Rusevelt, Franklin' },
                        { id: '', text: 'Other, Franklin' }
                    ]
                }
            },
            { field: 'field.radio', type: 'radio', required: false, html: { page: 2 }, options: {
                    items: [
                        { id: 0, text: 'Pickle, Susan' },
                        { id: 1, text: 'Adams, John' },
                        { id: 2, text: 'Openhimer, Peter' },
                        { id: 3, text: 'Woznyak, Steve' },
                        { id: 4, text: 'Rusevelt, Franklin' },
                        { id: 5, text: 'Stalone, Silvester' },
                        { id: 6, text: 'Mann, Fred' },
                        { id: 6, text: 'Ford, Mary' },
                        { id: 8, text: 'Purky, Mon' },
                        { id: 9, text: 'Min, Hla' }
                    ]
                }
            }
        ],
        onChange: function (event) {
            // event.preventDefault()
        },
        // onInput: function (event) {
        //     console.log('input', event);
        // },
        postData1: {
            a1: 1,
            a2: 2
        },
        actions: {
            reset: {
                text    : 'Some Action',
                style   : '',
                "class" : '',
                onClick : function () {
                    this.clear();
                }
            },
            save: function () {
                var obj = this;
                this.save({}, function (data) {
                    if (data.status == 'error') {
                        console.log('ERROR: '+ data.message);
                        return;
                    }
                    //obj.clear();
                });
            }
        }
    });
    // w2ui.form.formHTML = w2ui.form.generateHTML()
    // w2ui.form.render();
    // all event listener
    // w2ui.form.on('change', function (event) {
    //     event.onComplete = function () {
    //         console.log('--------');
    //         console.log('change2:', event, 'record:', w2ui.form.record);
    //     }
    // });
})