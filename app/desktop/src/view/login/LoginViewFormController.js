Ext.define('extJS_Test_Task.view.startup.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form-login',

    onLogin: function() {

        // var form = this.getView();
        // var user = form.down('textfield[name=user]').getValue();
        // var pass = form.down('passwordfield[name=pass]').getValue();
        var user = Ext.getCmp('form-login-field-login').getValue();
        var pass = Ext.getCmp('form-login-field-password').getValue();

        if (user === 'admin' && pass === 'padmin') {
            this.switchToHomeView();
        } else {
            Ext.Msg.alert('❌ Ошибка', 'Неверный логин или пароль');
        }
    },

    switchToHomeView: function() {
        // Ext.Viewport.removeAll()

        // Ext.Viewport.add({
        //     xtype: 'mainview'
        // });
        Ext.Viewport.removeAll(true);
        Ext.Viewport.add({ xtype: 'goodsview' });
        this.redirectTo( 'goodsview' );
    }
});