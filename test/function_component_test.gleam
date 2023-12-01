import react_gleam.{type Element}
import react_gleam/hook
import react_gleam/element
import gleeunit/should
import gleam/string

@external(javascript, "preact-render-to-string", "render")
fn render_to_string(element: Element) -> String

type Pet {
  Pet(name: String)
}

type PetState {
  Sitting
  Running
}

fn pet_profile(props: Pet) -> Element {
  use state, _s <- hook.state(Sitting)

  element.div(
    [],
    [
      element.text(
        "A pet called " <> props.name <> " is " <> string.inspect(state),
      ),
    ],
  )
}

pub fn first_test() {
  element.create(pet_profile, Pet(name: "Garfield"), [])
  |> render_to_string()
  |> should.equal("<div>A pet called Garfield is Sitting</div>")
}
