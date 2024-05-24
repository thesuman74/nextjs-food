import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Ensure this import path is correct

const TabsSection = () => {
  return (
    <div className="w-[400px] mx-auto mt-10">
      <Tabs defaultValue="account">
        <TabsList className="flex border-b border-gray-200">
          <TabsTrigger
            value="account"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Test
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Password
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Settings
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="privacy"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Privacy
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="support"
            className="p-4 text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Support
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="p-4">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password" className="p-4">
          Change your password here.
        </TabsContent>
        <TabsContent value="profile" className="p-4">
          Update your profile information here.
        </TabsContent>
        <TabsContent value="settings" className="p-4">
          Adjust your settings here.
        </TabsContent>
        <TabsContent value="notifications" className="p-4">
          Manage your notification preferences here.
        </TabsContent>
        <TabsContent value="security" className="p-4">
          Review your security settings here.
        </TabsContent>
        <TabsContent value="privacy" className="p-4">
          Update your privacy settings here.
        </TabsContent>
        <TabsContent value="billing" className="p-4">
          View and update your billing information here.
        </TabsContent>
        <TabsContent value="support" className="p-4">
          Get support for your account here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
