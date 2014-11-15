---
title: "Overview"
class_name: docs
full_width: true
---

##Waking a Box
When you create a Codio Project, it is automatically assigned an Ubuntu server. You can think of this server as being asleep until you open up your Project in the IDE. As soon as the Project loads in the IDE, the Box is up and running.

##When is the Server put back to sleep?
Your server is put to sleep within a few minutes of you exiting your Project.

##Can I have my Box 'Always on'?
Paid subscribers can use the [Always On Boxes]() feature. This allows you to mark Projects that you don't want to be put to sleep when you exit your Project.

##Can I SSH into my Box?
We support the ability to SSH into you Box as [described here]().

##Can I reboot my Box?
Yes. Please refer to the [Restart - Reset]() documentation.

##Can I let other people administer my Box?
Paid subscribers can use the Admin property of the [Permissions]() feature to allow other Codio users to access their Project and have full access to your Codio Box as well as the code.

##Do I have sudo access
At the moment, we do not provide sudo access. However, you should not require it as most system commands are accessible without. We also provide the ability for you to [install software]() onto your Box in a very easy way.

##How do I install software dependencies?
We have a really simple way of installing languages, databases, web servers and many other components. Please refer to the [Install software]() documentation.

##How do I access my Box from code
We have [full documentation]() on how to access your Box from code.

##Firewall issues
Codio Boxes do not run on port 80. Some companies block outbound access to ports other than port 80. Please read [this section]() on how to work around this.

##Important 'localhost' configuration information
In many config files on your Box you would include a reference to `127.0.0.1` to access localhost. Please be sure to use `0.0.0.0` instead.
