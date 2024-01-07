/// <reference path="../.astro/types.d.ts" />
import '../.astro/types';
import 'astro/client';

declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}
