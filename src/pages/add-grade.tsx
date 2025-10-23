import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Link } from "react-router";

export default function AddGradePage() {
  return (
    <div className="w-full p-6">
      <form>
        <FieldGroup className="max-w-xl mx-auto">
          <FieldSet>
            <FieldLegend className="font-bold">Create new grade</FieldLegend>

            <FieldGroup className="grid gap-4 grid-cols-2">
              <Field>
                <FieldLabel htmlFor="grade">Grade Name</FieldLabel>
                <Input id="grade" placeholder="I" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="rank">Rank</FieldLabel>
                <Input id="rank" placeholder="1" type="number" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="salary">Salary</FieldLabel>
                <Input
                  id="salary"
                  placeholder="15,000"
                  type="number"
                  required
                />
              </Field>
            </FieldGroup>
            <FieldGroup className="mt-4">
              <FieldSeparator />
              <div className="ml-auto flex  gap-2 items-center">
                <Button type="submit" className="bg-[#3E9E6C]">
                  Save
                </Button>
                <Link to="/hr/settings">
                  <Button variant="outline" className="ml-2">
                    Cancel
                  </Button>
                </Link>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
