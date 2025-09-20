Ext.define('extJS_Test_Task.view.home.GoodsView.tab.grid',{
    extend: 'Ext.grid.Grid',
    xtype: 'goodstabgridview',
    cls: 'goodstabgridview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'goodstabviewcontroller'},
    viewModel: {type: 'goodstabviewmodel'},
    store: {type: 'goodstabviewstore'},
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'},
            renderer: Ext.util.Format.numberRenderer('0')
        },
        {
            text: 'Имя',
            dataIndex: 'name',
            editable: true, 
            width: 230
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
            renderer: Ext.util.Format.numberRenderer('0')
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
