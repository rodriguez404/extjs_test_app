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
            layout: 'fit',
            items: [
                {
                    xtype: 'personnelview'
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