var ModAPI = require('modapi')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var readLocalFile = function(name) {
  return fs.readFileSync(path.join(__dirname, name))
}

;[
  "Controls/PluginHelpEverywhereButton.qml",
  "Main/Dialog_PluginHelpEverywhere.qml",
  
  "Database/Group_Note.qml.js",
  "Event/EventCommands/EventCommand101.qml.js", // Event Commands: Show Text
].forEach(function(i) {
  if (path.extname(i) == ".js" && path.extname(path.basename(i, ".js")) == ".qml") {
    require("./" + i)
  } else {
    ModAPI.add(i, readLocalFile(i))
  }
})

;[
  // Event Commands
  "Event/EventCommands/EventCommand108.qml", // Comment
  "Event/EventCommands/EventCommand111.qml", // Conditional Branch
  "Event/EventCommands/EventCommand355.qml", // Script
  "Event/EventCommands/EventCommand356.qml", // Plugin Command

  // Movement Commands
  "Event/MovementCommands/MovementCommand45.qml", // Script
].forEach(function(i) {
  var qml = ModAPI.QMLFile(i)
  var addon, button

  if ((addon = qml.getObjectsByDescribe("DialogAddon")).length > 0) {
    addon = addon[0]
  } else {
    addon = qml.root.node.newObject()
    addon.createNode().describe = "DialogAddon"
  }

  button = addon.node.newObject()
  button.createNode().describe = "PluginHelpEverywhereButton"

  qml.save()
})
