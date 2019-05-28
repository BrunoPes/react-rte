

export var INLINE_STYLE_BUTTONS = [{ label: 'Negrito', style: 'BOLD' }, { label: 'Itálico', style: 'ITALIC' }, { label: 'Tachada', style: 'STRIKETHROUGH' }, { label: 'Mono Espaçado', style: 'CODE' }, { label: 'Sublinhado', style: 'UNDERLINE' }];


export var BLOCK_TYPE_DROPDOWN = [{ label: 'Normal', style: 'unstyled' }, { label: 'Cabeçalho Grande', style: 'header-one' }, { label: 'Cabeçalho Médio', style: 'header-two' }, { label: 'Cabeçalho Pequeno', style: 'header-three' }, { label: 'Bloco de Código', style: 'code-block' }];
export var BLOCK_TYPE_BUTTONS = [{ label: 'Lista Desordenada', style: 'unordered-list-item' }, { label: 'Lista Ordenada', style: 'ordered-list-item' }, { label: 'Citação', style: 'blockquote' }];

var EditorToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN: BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS: BLOCK_TYPE_BUTTONS
};

export default EditorToolbarConfig;