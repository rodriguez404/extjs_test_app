Ext.define('extJS_Test_Task.view.home.GoodsView.tab.search.searchid', {
    extend: 'Ext.field.Search',
    xtype: 'searchid',
    // name: 'id' // создается динамически в controller
    controller: 'goodstabviewcontroller',
    width: 400,
    ui: 'solo',
    placeholder: 'ID',
    margin: '0 10 0 0',
    listeners: {
        specialkey: 'onSearchIdFieldEnter'
    },
});