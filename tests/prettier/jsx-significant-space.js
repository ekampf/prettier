after =
  <span>
      foo <span>bar</span>
  </span>

before =
  <span>
    <span>bar</span> foo
  </span>

before_break1 =
  <span>
    <span barbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbar /> foo
  </span>

before_break2 =
  <span>
    <span barbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbar /> foo
  </span>

after_break =
  <span>
    foo <span barbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbar />
  </span>

within =
  <span>
    foo <span> bar </span>
  </span>

break_components =
  <div>
    <Foo />
    <Bar>
      <p>foo<span>bar bar bar</span></p><h1><span><em>yep</em></span></h1>
    </Bar>
    <h2>nope</h2>
  </div>

var x = <div>
    hello <strong>hi</strong> <foo>sdkflsdfjk</foo>
 </div>;

nest_plz =
  <div>
    <div>
    <div></div>
    </div>
  </div>
