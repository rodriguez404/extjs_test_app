Ext.define('extJS_Test_Task.view.startup.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    controller: 'form-login',
    title: 'Авторизация',

    bodyPadding: 20,
    width: 320,
    autoSize: true,

    items: [{
        xtype: 'textfield',
        // allowBlank: false,
        required: true,
        label: 'Логин',
        name: 'user',
        placeholder: 'логин',
        id: 'form-login-field-login'
    }, {
        xtype: 'passwordfield',
        // allowBlank: false,
        required: true,
        label: 'Пароль',
        name: 'pass',
        placeholder: 'пароль',
        id: 'form-login-field-password'
    }],

    buttons: [{
        text: 'Войти',
        handler: 'onLogin'
    }],

});