---
title: Expense Tracker (Refactor and Functionality)
link: https://github.com/pontakornth/expense-tracker
day: 7
date: 2021-03-28
---
On yesterday, I wrote a messy code and have lots of duplicate logic and style.
So, I need to refactor to seperate complex components into a lots of simple components.
For example, a big form can be refactor like this.
<!--more-->
This is the old code.

```tsx
const App = () => {
    // Insert lots of code here.
    return (
        <div>
            <form>
                <input type="text" name="name" onChange={handleChangeName} value={name} />
                <input type="number" name="amount" onChange={handleChangeAmount} value={amount} />
                <input type="text" name="description" onChange={handleChangeDescription} value={description} />
                <input type="text" name="username" onChange={handleChangeName} value={name} />
            </form>
            <div>
            {/* Insert other things here.*/}
            </div>
        </div>
    )>
}
```

This is the refactored one.

```tsx
const BigForm = (props) => (
    <form>
        <input type="text" name="name" onChange={props.handleChangeName} value={props.name} />
        <input type="number" name="amount" onChange={props.handleChangeAmount} value={props.amount} />
        <input type="text" name="description" onChange={props.handleChangeDescription} value={props.description} />
        <input type="text" name="username" onChange={props.handleChangeName} value={props.name} />
    </form>
)
const App = () => {
    // Insert big setup code here.
    return (
        <div>
          {/* You need to insert other props here. */}
          <BigForm handleChange={handleChangeName} >
          <div>
          {/* Insert other things here.*/}
          </div>
        </div>
    )
}
```

This is the refactored one. This also include the styled components too. I use Goober but it
has similar things here.

```tsx
const App = () => (
    <div className={css(tw`container p-4 border shadow-md`)}>
    {/* Turn out that the code above is used alot */}
    </div>
)
// This can be re-used over and over.
const Container = styled('div')(tw`container p-4 border shadow-md`)
```

I will do other functionalities such as computed balance.