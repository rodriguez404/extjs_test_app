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
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {text: 'Email',dataIndex: 'email',editable: true, width: 230},
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
