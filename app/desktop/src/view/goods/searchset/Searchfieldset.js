Ext.define('extJS_Test_Task.view.home.GoodsView.tab.search', {
    extend: 'Ext.form.Panel',
    xtype: 'searchfieldset',

    // fullscreen: true,
    items: [
        {
            title: 'Search by id',
            items: [
                {
                    xtype: 'searchid',
                }
            ]
        },
        {
            title: 'Search by desc',
            items: [
                {
                    xtype: 'searchdescription',
                }
            ]
        },
    ]
});
