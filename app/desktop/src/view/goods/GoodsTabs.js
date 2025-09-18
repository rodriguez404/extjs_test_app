Ext.define('extJS_Test_Task.view.home.GoodsView', {
    extend: 'Ext.Container',
	xtype: 'goodsview',
	cls: 'goodsview',
	controller: {type: 'goodsviewcontroller'},

    requires: [
        'Ext.tab.Panel',
        'Ext.layout.overflow.Scroller'
    ],

    profiles: {
        defaults: {
            buttonShadow: true,
            cls: 'demo-solid-background',
            height: 300,
            width: 400,
            shadow: true
        },
        ios: {
            buttonShadow: undefined
        },
        phone: {
            defaults: {
                width: undefined
            }
        }
    },

    shadow: false,
    autoSize: true,
    layout: 'fit',
    width: 400,
    height: 300,
    padding: 8,

    items: [{
        xtype: 'tabpanel',
        reference: 'tabpanel',
        cls: 'demo-solid-background',
        shadow: 'true',
        tabBar: {
            layout: {
                pack: 'start',
                overflow: 'scroller'
            }
        },

        defaults: {
            scrollable: true,
            layout: 'center',
            userCls: 'card',
            tab: {
                minWidth: 100
            }
        }
    }, {
        xtype: 'toolbar',
        docked: 'top',
        ui: 'transparent',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',
            ui: 'action'
        },
        items: [{
            xtype: 'button',
            handler: 'addTab',
            text: 'Учёт Товаров',
            iconCls: 'x-fa fa-plus'
        }]
    }]
});