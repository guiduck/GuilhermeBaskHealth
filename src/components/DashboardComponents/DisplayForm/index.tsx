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
} from "@/components/Form";
import { useEffect } from "react";
import { toast } from "react-toastify";
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
  const form = useForm<DisplayFormValues>();
  const { errors } = form.formState;

  useEffect(() => {
    if (errors.items?.message) {
      toast.error(errors.items?.message);
    }
  }, [errors.items]);

  const { setDisplayItems, displayItems } = useWidgetsStore();
  console.log({ displayItems });
  function onSubmit(data: any) {
    const { items } = data;
    const itemClicked = items;

    if (displayItems.includes(itemClicked)) {
      setDisplayItems(displayItems.filter((item) => item !== itemClicked));
    } else {
      setDisplayItems([...displayItems, itemClicked]);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="relative">
              <div className="grid gap-2 grid-cols-3 lg:flex lg:gap-6">
                <div className="mb-4">
                  <FormLabel className="text-base">{displayLabel}</FormLabel>
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
                                console.log(item.id, checked);
                                field.onChange(item.id);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-xs font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
