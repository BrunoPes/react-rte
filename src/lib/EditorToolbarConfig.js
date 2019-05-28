/* @flow */
import type {EditorState} from 'draft-js';

export type StyleConfig = {
  label: string;
  style: string;
  className?: string;
};

type GetControlState = (key: string) => ?string;
type SetControlState = (key: string, value: string) => void;

export type CustomControl = ReactNode | (set: SetControlState, get: GetControlState, state: EditorState) => ReactNode;
export type CustomControlList = Array<CustomControl>;

export type StyleConfigList = Array<StyleConfig>;

export type GroupName = 'INLINE_STYLE_BUTTONS' | 'BLOCK_TYPE_BUTTONS' | 'LINK_BUTTONS' | 'BLOCK_TYPE_DROPDOWN' | 'HISTORY_BUTTONS' | 'IMAGE_BUTTON';

export type ToolbarConfig = {
  display: Array<GroupName>;
  extraProps?: Object;
  INLINE_STYLE_BUTTONS: StyleConfigList;
  BLOCK_TYPE_DROPDOWN: StyleConfigList;
  BLOCK_TYPE_BUTTONS: StyleConfigList;
};

export const INLINE_STYLE_BUTTONS: StyleConfigList = [
  {label: 'Negrito', style: 'BOLD'},
  {label: 'Itálico', style: 'ITALIC'},
  {label: 'Tachada', style: 'STRIKETHROUGH'},
  {label: 'Mono Espaçado', style: 'CODE'},
  {label: 'Sublinhado', style: 'UNDERLINE'},
];

export const BLOCK_TYPE_DROPDOWN: StyleConfigList = [
  {label: 'Normal', style: 'unstyled'},
  {label: 'Cabeçalho Grande', style: 'header-one'},
  {label: 'Cabeçalho Médio', style: 'header-two'},
  {label: 'Cabeçalho Pequeno', style: 'header-three'},
  {label: 'Bloco de Código', style: 'code-block'},
];
export const BLOCK_TYPE_BUTTONS: StyleConfigList = [
  {label: 'Lista Desordenada', style: 'unordered-list-item'},
  {label: 'Lista Ordenada', style: 'ordered-list-item'},
  {label: 'Citação', style: 'blockquote'},
];

let EditorToolbarConfig: ToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
};

export default EditorToolbarConfig;
