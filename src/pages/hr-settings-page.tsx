import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DownloadIcon,
  PlusIcon,
  RefreshCwIcon,
  Trash2Icon,
} from "lucide-react";

export default function HRSettings() {
  return (
    <div className="flex w-full min-w-sm flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600">Manage all settings</p>
      </div>
      <Tabs defaultValue="positions" className="w-full">
        <TabsList>
          <TabsTrigger value="positions">Positions</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="positions">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 justify-end">
              <Button className="bg-[#3E9E6C]">
                {" "}
                <PlusIcon /> Add New
              </Button>
              <Button variant="destructive">
                {" "}
                <Trash2Icon /> Delete
              </Button>
              <Button variant="outline">
                <DownloadIcon />
                Export
              </Button>
              <Button variant="outline">
                <RefreshCwIcon />
                Refresh
              </Button>
            </div>
            <Card>
              <CardContent className="grid gap-6">
                <DataTableDemo />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
