define(function (require, exports, module) {
    "use strict";
    var commandName = "load.template";
    var Menus = brackets.getModule("command/Menus");
    var CommandManager = brackets.getModule("command/CommandManager");
    var EditorManager = brackets.getModule("editor/EditorManager");
    
    var template;
    
    /* Implementation */
    function loadTemplate() {
        template = require('text!template.html');
        EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
    }
    
    /* Register New Command */
    CommandManager.register("New Blog Post", commandName, loadTemplate); 
    
    /* Custom menu */
    var menu = Menus.addMenu("Post", "blog.post.menu" );  
    menu.addMenuItem(commandName)
});


