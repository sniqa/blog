import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { createElement } from 'react'

interface Props {
	children: ReactJSXElement | Array<ReactJSXElement>
	className?: string
	tag?: string
}

export function HiddenWithMobil({
	children,
	className = '',
	tag = 'div',
}: Props) {
	return createElement(
		tag,
		{ className: `<sm:hidden ${className}`.trim() },
		children
	)
}

export function HiddenWithDesk({
	children,
	className = '',
	tag = 'div',
}: Props) {
	return createElement(
		tag,
		{ className: `sm:hidden ${className}`.trim() },
		children
	)
}
