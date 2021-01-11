import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: PureInboxScreen,
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen",
};

const Template: any = (args: any) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
