import { createSignal, Switch, Match }	from 'solid-js';

export default function ControlFlowSwitchMatch() { // more than 2 mutual exclusive outcomes. For this case, we have the <Switch> and <Match> components modeled roughly after JavaScript's switch/case.
  const [x] = createSignal(7);

  const ret1 = (
    <Show
            when      ={x() > 10}
            fallback  ={<Show
            when      ={5 > x()}
            fallback  ={            <p>{x()} is between   5 and 10</p>} >
                                    <p>{x()} is less than 5</p> </Show> }>
                                    <p>{x()} is greater than    10</p> </Show>
  );
  return (
    <Switch fallback	={           	<p>{x()} is between   5 and 10</p>}>
      <Match when   	={x() > 10}> 	<p>{x()} is greater than    10</p> </Match>
      <Match when   	={ 5  > x()}>	<p>{x()} is less than 5</p>        </Match>
    </Switch>
  );
}
