Ext.define('extJS_Test_Task.view.home.GoodsView.tab.grid',{
    extend: 'Ext.grid.Grid',
    xtype: 'goodstabgridview',
    cls: 'goodstabgridview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'goodstabviewcontroller'},
    viewModel: {type: 'goodstabviewmodel'},
    store: {type: 'goodstabviewstore'},
    height: 500,
    layout: 'fit',
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
            renderer: Ext.util.Format.numberRenderer('0'),
            filter: {
                type: 'string'
            }
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
            // renderer: function(value, record, dataIndex, cell) {
            //     var listItem = cell.element.up('.x-listitem');
            //     var innerElement = cell.element.down('.x-gridcell-body-el');
            //     // if (value === 0) {
            //         listItem.addCls('x-gridcell-zero-value');
            //         listItem.setStyle('background', '#FF0000 !important');

            //         cell.setStyle('background', '#FF0000 !important');
            //         cell.addCls('x-gridcell-zero-value');

            //         innerElement.addCls('x-gridcell-zero-value');
            //         innerElement.setStyle('background', '#FF0000 !important');
            //     // }
            //     return Ext.util.Format.numberRenderer('0')(value);
            // }
            // cell: {
            //     encodeHtml: false
            // },
            // renderer: function(value) {
            //     var formatted = Ext.util.Format.numberRenderer('0')(value);
            //     if (value === 0) {
            //         return `<span style="background: #FF0000; display: block;">
            //         ${formatted}
            //         </span>`;
            //     }
            //     return formatted;
            // }
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
