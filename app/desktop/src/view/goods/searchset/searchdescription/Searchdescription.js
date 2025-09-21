Ext.define('extJS_Test_Task.view.home.GoodsView.tab.search.searchdescription', {
    extend: 'Ext.field.Search',
    xtype: 'searchdescription',
    // name: 'description' // создается динамически в controller
    controller: 'goodstabviewcontroller',
    width: 400,
    ui: 'solo',
    placeholder: 'Описание',
    margin: '0 10 0 0',
    listeners: {
        specialkey: 'onSearchDescFieldEnter'
    }
});