Ext.define('extJS_Test_Task.view.home.GoodsViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.goodsviewcontroller',

    addTab: function() {
        var panel = this.lookupReference('tabpanel'),
            title;

        if (!this._currentTab) {
            this._currentTab = panel.getInnerItems().length + 1;
        }

        title = 'Товары ' + this._currentTab;
        panel.add({
            closable: true,
            title: title,
            items: [
                {
                    xtype: 'searchfieldset',
                    items: [
                        {
                            xtype: 'searchid',
                            name: 'id' + this._currentTab
                        },
                        {
                            xtype: 'searchdescription',
                            name: 'description' + this._currentTab
                        },
                    ],
                },
                {
                    xtype: 'goodstabgridview',
                }
            ]
        });

        this._currentTab++;

    },

    onClickLogout: function () {
		localStorage.setItem("LoggedIn", false);
		this.getView().destroy();
		Ext.Viewport.add([{ xtype: 'loginview'}]);
        this.redirectTo( 'loginview' );
	}
});