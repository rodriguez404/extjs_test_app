Ext.define('extJS_Test_Task.view.main.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'headerview',
    cls: 'headerview',
    viewModel: {},
    items: [
        { 
            xtype: 'container',
            cls: 'headerviewtext',
            bind: { html: '{heading}' }
        },
        // '->',
        {
            xtype: 'button',
            ui: 'headerbutton',
            reference: 'returntologin',
            handler: 'onHeaderViewReturnToLogin',
            html: 'Выход'
            // iconCls: 'x-fa fa-arrow-left'
        }
    ]
});
