var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("Event/EventCommands/EventCommand101.qml")

var previewButton = qml.getObjectById("button")
previewButton.node.object("anchors.right", null)
previewButton.node.object("anchors.bottom", null)

var container = previewButton.parent.newObject().createNode()
container.describe = "ControlsRow"
container.object("anchors.right", "parent.right")
container.object("anchors.bottom", "parent.bottom")

var pheButton = container.newObject()
pheButton.createNode().describe = "PluginHelpEverywhereButton"

previewButton.parent = container

qml.save()
