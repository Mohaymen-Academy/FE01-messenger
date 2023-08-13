/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { $isAtNodeEnd } from '@lexical/selection'
import { ElementNode, RangeSelection, TextNode } from 'lexical'

export default function getSelectedNode(
  selection: RangeSelection
): TextNode | ElementNode {
  const { anchor } = selection
  const { focus } = selection
  const anchorNode = selection.anchor.getNode() as TextNode | ElementNode
  const focusNode = selection.focus.getNode() as TextNode | ElementNode
  if (anchorNode === focusNode) {
    return anchorNode
  }
  const isBackward = selection.isBackward()
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode
  }
  return $isAtNodeEnd(anchor) ? anchorNode : focusNode
}
