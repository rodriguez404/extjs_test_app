Ext.define('extJS_Test_Task.view.home.GoodsViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.goodstabviewstore',
    fields: [
        { name: 'id',           type: 'number' },
        { name: 'name',         type: 'string' },
        { name: 'description',  type: 'string' },
        { name: 'cost',         type: 'number' },
        { name: 'amount',       type: 'number' },
    ],
    data: { items: [
        { id: "1", name: "Jean Luc",   description: "jeanluc.picard@enterprise.com", cost: "5168761", amount: "0"},
        { id: "2", name: "ModernWorf", description: "worf.moghsson@enterprise.com",  cost: "51282", amount: "1515" },
        { id: "3", name: "Deanna",     description: "deanna.troi@enterprise.com",    cost: "533", amount: "15" },
        { id: "4", name: "Data",       description: "mr.data@enterprise.com",        cost: "5554444444.1222", amount: "2" }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },    
});
