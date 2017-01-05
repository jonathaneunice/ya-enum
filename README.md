# Enum

`Enum` keeps a fixed list of values (usually strings,
but could be other data types) to integer
indices. It acts like a list plus
a current index into the list, a common
pattern in developing user
interfaces (among other programs).

### Usage Example

```javascript
const Enum = require('ya-enum');

foods = Enum(['fish', 'meat', 'apples']);
foods.value = 'meat';
// foods.index now 2
foods.index = 2;
// foods.value now 'apples'
```

### Why Yet Another Enum Package?

In languages like JavaScript, Perl, and Python that
"grew up" without an official enumerated
type, there are many aftermarket
takes on the pattern.
Everyone, it seems, eventually gets around to
crafting their own home-grown `enum` type.

So why do it **yet** again? Why not just
adopt someone else's
take?

Because I had a specific need in the construction of user interfaces to manage
the pairing of integer indices and text labels. I wanted a specific style of API
to make sure my resulting program was simplified and made more reliable. And I
didn't care about the `color.RED` attribute style of access many enum packages
seem to favor.

This was, in other words, a: top-down requirement driven by a specific need, not
a bottoms-up or synthetic "I know! Let's make up an enum type!" effort.
Different use, subtly but valuably different API style and virtues.

I also wanted to be sure it was well-tested for the specific use cases I had.
It's not a complex project like building your own XML parser, so it's
manageable.

Finally, I'd primarily been using `function`-style "classes" in
JavaScript, and wanted a chance to more fully and
explicitly use the new ES2015 official `class` and
property getter/setter syntax.
