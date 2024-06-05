import  Heading from './Heading.svelte';
import  Paragraph from './Paragraph.svelte';
import  Image from './Image.svelte';
import  Link from './Link.svelte';
import  Table from './Table.svelte';
import  TableHead from './TableHead.svelte';
import  TableBody from './TableBody.svelte';
import  TableRow from './TableRow.svelte';
import  TableCell from './TableCell.svelte';

export const Renderers = {
	heading: Heading as any,
	paragraph: Paragraph as any,
	// text: Text as any,
	image: Image as any,
	link: Link as any,
	// em: Em as any,
	// strong: Strong as any,
	// codespan: Codespan as any,
	// del: Del as any,
	table: Table as any,
	tablehead: TableHead as any,
	tablebody: TableBody as any,
	tablerow: TableRow as any,
	tablecell: TableCell
	// list: List as any,
	// orderedlistitem: null as any,
	// unorderedlistitem: null as any,
	// listitem: ListItem as any,
	// hr: Hr as any,
	// html: Html as any,
	// blockquote: Blockquote as any,
	// code: Code as any,
	// br: Br
};