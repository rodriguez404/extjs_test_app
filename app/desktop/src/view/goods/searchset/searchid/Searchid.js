Ext.define('extJS_Test_Task.view.home.GoodsView.tab.search.searchid', {
    extend: 'Ext.field.Search',
    xtype: 'searchid',
    // name: 'id' // создается динамически в controller
    label: 'ID',
    controller: 'goodstabviewcontroller',
    width: 400,
    listeners: {
        specialkey: 'onSearchIdFieldEnter'
    }
});