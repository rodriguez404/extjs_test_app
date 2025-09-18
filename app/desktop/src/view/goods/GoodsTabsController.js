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
            html: title + ' Content'
        });

        this._currentTab++;
    }
});