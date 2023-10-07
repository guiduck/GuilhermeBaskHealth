"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Checkbox } from "@/components/Checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { useWidgetsStore } from "@/stores/widgets";

const displayFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type DisplayFormValues = z.infer<typeof displayFormSchema>;

type Item = {
  id: string;
  label: string;
};

interface DisplayFormProps {
  items: Item[];
  displayLabel?: string;
}

export function DisplayForm({ items, displayLabel }: DisplayFormProps) {
  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
  });

  const { setDisplayItems, displayItems } = useWidgetsStore();

  function onSubmit(data: DisplayFormValues) {
    const { items } = data;
    setDisplayItems(items);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="flex gap-6">
              <div className="mb-4">
                <FormLabel className="text-base">
                  {displayLabel ?? "Summary"}
                </FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={"items"}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            type="submit"
                            checked={displayItems.includes(item.id)}
                            onCheckedChange={(checked) => {
                              if (Array.isArray(field.value)) {
                                if (checked) {
                                  field.onChange([...field.value, item.id]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                                }
                              } else {
                                field.onChange([item.id]);
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
