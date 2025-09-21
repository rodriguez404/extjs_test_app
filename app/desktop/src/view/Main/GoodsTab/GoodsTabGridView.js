Ext.define('extJS_Test_Task.view.home.GoodsView.tab.grid',{
    extend: 'Ext.grid.Grid',
    xtype: 'goodstabgridview',
    cls: 'goodstabgridview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'goodstabviewcontroller'},
    viewModel: {type: 'goodstabviewmodel'},
    store: {type: 'goodstabviewstore'},
    height: 500,

    enableColumnResize: true,
    selectable: { checkbox: false, mode: 'single' },

    layout: 'fit',
    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            width: 100,
            cell: {userCls: 'bold'},
            renderer: Ext.util.Format.numberRenderer('0'),
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Имя',
            dataIndex: 'name',
            width: 230,
            cell: {
                cls: 'clickable-cell'
            },
        },
        {
            text: 'Описание',
            dataIndex: 'description',
            width: 200
        },
        {
            text: 'Стоимость',
            dataIndex: 'cost',
            width: 150,
            renderer: Ext.util.Format.numberRenderer('0.00')
        },
        {
            text: 'Кол-во',
            dataIndex: 'amount',
            width: 150,
            cell: {
                encodeHtml: false
            },
            renderer: function(value, record, dataIndex, cell) {
                if (value === 0) {
                    cell.setStyle('background:red');
                }
                else {
                    cell.setStyle('background:transparent')
                }
                return Ext.util.Format.numberRenderer('0')(value);
            }
        }
    ],
    listeners: {
        element: 'element',
        tap: 'clickableCell'
    }
});
