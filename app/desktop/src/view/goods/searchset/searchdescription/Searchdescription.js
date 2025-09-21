Ext.define('extJS_Test_Task.view.home.GoodsView.tab.search.searchdescription', {
    extend: 'Ext.field.Search',
    xtype: 'searchdescription',
    // name: 'description' // создается динамически в controller
    label: 'Описание',
    controller: 'goodstabviewcontroller',
    width: 400,
    listeners: {
        specialkey: 'onSearchDescFieldEnter'
    }
});