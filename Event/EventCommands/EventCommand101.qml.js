var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("Event/EventCommands/EventCommand101.qml")

var previewButton = qml.root.getObjectById("button")
previewButton.remove("anchors.right")
previewButton.remove("anchors.bottom")
var x = previewButton.parent
var container = ModAPI.QMLCompile("ControlsRow {anchors.right: parent.right; anchors.bottom: parent.bottom; PluginHelpEverywhereButton{} } ")
x.add(container)
container.add(previewButton)

qml.save()
