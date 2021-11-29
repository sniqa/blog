import Mitt from 'mitt'

export enum MittEventName {
	ALERT = 'ALERT',
}

type Events = {
	[MittEventName.ALERT]: string
}

export const emitter = Mitt<Events>()

/*
Example

import mitt from 'mitt';

type Events = {
  foo: string;
  bar?: number;
};

const emitter = mitt<Events>(); // inferred as Emitter<Events>

emitter.on('foo', (e) => {}); // 'e' has inferred type 'string'

emitter.emit('foo', 42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. (2345)

*/
