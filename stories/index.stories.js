import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/components/styleguide/Button";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
    .add("with text", withInfo()(() => <Button onClick={action("clicked")}>Hello Button</Button>))
    .add("with some emoji", withInfo()(() => <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>));
