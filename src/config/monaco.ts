/**
 * monaco
 */

import * as MonacoEditor from 'monaco-editor'

const common: MonacoEditor.editor.IStandaloneDiffEditorConstructionOptions = {
  contextmenu: false,
  lineNumbers: 'off',
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false
  }
}

export { common }
