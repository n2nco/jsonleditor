"use client"

import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, Download, ChevronDown, ChevronUp, Plus, Copy, Check, Moon, Sun, ArrowUp, ArrowDown, Trash, X } from 'lucide-react';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

// Utility function
const cn = (...inputs: any) => inputs.filter(Boolean).join(' ')

// UI Components


const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <svg viewBox="0 0 8 8">
        <path d="M1,4 L3,6 L7,2" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950"
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName




import { useTheme } from "next-themes"

// Main Component
const JSONLEditor = () => {
  const { theme, setTheme } = useTheme()
  const [jsonlContent, setJsonlContent] = useState('');
  const [parsedContent, setParsedContent] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [roleFilters, setRoleFilters] = useState({ system: true, user: true, assistant: true });
  const [customRoles, setCustomRoles] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hideFirstMessage, setHideFirstMessage] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({});
  const [newCustomRole, setNewCustomRole] = useState('');
  const [exportedContent, setExportedContent] = useState('');
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);
  const [showOnlyLatest, setShowOnlyLatest] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [itemExportContent, setItemExportContent] = useState("");
  const [isItemExportDialogOpen, setIsItemExportDialogOpen] = useState(false);
  const [exportingItemIndex, setExportingItemIndex] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });
  const exportTextAreaRef = useRef<HTMLTextAreaElement>(null);
  // const [visibleItems, setVisibleItems] = useState(10); // Render 10 items at a time
  // const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (darkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode, setTheme]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  //       }
  //     },
  //     { threshold: 1 }
  //   );

  //   if (observerRef.current) {
  //     observer.observe(observerRef.current);
  //   }

  //   return () => {
  //     if (observerRef.current) {
  //       observer.unobserve(observerRef.current);
  //     }
  //   };
  // }, []); --------------------------------------------- Render 10 items at a time

  const handleExportItem = (itemIndex: number) => {
    try {
      const item = parsedContent[itemIndex];
      const jsonlString = JSON.stringify(item);
      setItemExportContent(jsonlString);
      setExportingItemIndex(itemIndex);
      setIsItemExportDialogOpen(true);
    } catch (err) {
      setError("Error preparing JSONL for export: " + (err as Error).message);
    }
  };

  const parseJSONL = (content: string) => {
    try {
      const lines = content.trim().split('\n');
      const parsed = lines.map(line => {
        const item = JSON.parse(line);
        if (item.conversations) {
          return {
            messages: item.conversations.map((conv: any) => ({
              role: conv.from || conv.role,
              content: conv.value || conv.content,
            }))
          };
        } else if (item.messages) {
          return {
            messages: item.messages.map((msg: any) => ({
              role: msg.role || msg.from,
              content: msg.content || msg.value,
            }))
          };
        } else {
          throw new Error('Invalid structure');
        }
      });
  
      setParsedContent(parsed);
      setError('');
    } catch (err) {
      setError('Error parsing JSONL: ' + (err as Error).message);
    }
  };
  
  
  
  
  
  
  const parseJSON = (content: string) => {
    try {
      const parsed = JSON.parse(content);
      let transformed = [];
  
      if (parsed.conversations) {
        transformed = parsed.conversations.map((conv: any) => ({
          messages: [{ role: conv.from || conv.role, content: conv.value || conv.content }]
        }));
      } else if (parsed.messages) {
        transformed = [{ messages: parsed.messages }];
      } else {
        setError('Error parsing JSON: Invalid structure');
        return;
      }
  
      setParsedContent(transformed);
      setError('');
    } catch (err) {
      setError('Error parsing JSON: ' + (err as Error).message);
    }
  };
  
  
  
  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setJsonlContent(content);
  
    // Check if the content is a single valid JSON object
    try {
      const parsed = JSON.parse(content);
      parseJSON(content);
    } catch (jsonError) {
      // If JSON parsing fails, assume it's JSONL and try to parse it
      parseJSONL(content);
    }
  };
  
  
  
  

  const handleExport = () => {
    try {
      const jsonlString = parsedContent.map(item => JSON.stringify(item)).join('\n');
      setExportedContent(jsonlString);
      setIsExportDialogOpen(true);
    } catch (err) {
      setError('Error preparing JSONL for export: ' + (err as Error).message);
    }
  };

  // const handleCopyToClipboard = () => {
  //   if (exportTextAreaRef.current) {
  //     exportTextAreaRef.current.select();
  //     document.execCommand('copy');
  //     setIsCopied(true);
  //     setTimeout(() => setIsCopied(false), 2000);
  //   }
  // };

  const handleCopyToClipboard = (content: string, useRef: boolean = false) => {
    if (useRef && exportTextAreaRef.current) {
      exportTextAreaRef.current.select();
      document.execCommand('copy');
    } else {
      navigator.clipboard.writeText(content);
    }
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getLatestMessages = (messages: any[]) => {
    const latestMessages = [];
    let lastUserIndex = messages.length - 1;

    while (lastUserIndex > 0 && messages[lastUserIndex].role !== 'user') {
      lastUserIndex--;
    }
    while (lastUserIndex > 0 && messages[lastUserIndex - 1].role === 'user') {
      lastUserIndex--;
    }

    for (let i = lastUserIndex; i < messages.length; i++) {
      latestMessages.push(messages[i]);
    }

    return latestMessages;
  };

  const addCustomRole = () => {
    if (newCustomRole && !roleFilters.hasOwnProperty(newCustomRole)) {
      setRoleFilters(prev => ({ ...prev, [newCustomRole]: true }));
      setCustomRoles(prev => [...prev, newCustomRole]);
      setNewCustomRole('');
    }
  };

  const toggleItemExpansion = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const moveMessage = (itemIndex: number, messageIndex: number, direction: number) => {
    const newParsedContent = [...parsedContent];
    const item = newParsedContent[itemIndex];
    const [movedMessage] = item.messages.splice(messageIndex, 1);
    item.messages.splice(messageIndex + direction, 0, movedMessage);
    setParsedContent(newParsedContent);
  };

  const deleteMessageContent = (itemIndex: number, messageIndex: number) => {
    const newParsedContent = [...parsedContent];
    newParsedContent[itemIndex].messages[messageIndex].content = '';
    setParsedContent(newParsedContent);
  };

  const addMessage = (itemIndex: number) => {
    const newParsedContent = [...parsedContent];
    newParsedContent[itemIndex].messages.push({ role: 'user', content: '' });
    setParsedContent(newParsedContent);
  };

  const deleteMessage = (itemIndex: number, messageIndex: number) => {
    const newParsedContent = [...parsedContent];
    newParsedContent[itemIndex].messages.splice(messageIndex, 1);
    if (newParsedContent[itemIndex].messages.length === 0) {
      newParsedContent.splice(itemIndex, 1);
    }
    setParsedContent(newParsedContent);
  };

  const deleteItem = (itemIndex: number) => {
    const newParsedContent = [...parsedContent];
    newParsedContent.splice(itemIndex, 1);
    setParsedContent(newParsedContent);
  };

  const filteredContent = parsedContent.map((item, itemIndex) => ({
    ...item,
    itemIndex,
    messages: showOnlyLatest
      ? getLatestMessages(item.messages.filter((msg: any, index: number) => {
          const roleMatch = roleFilters[msg.role as keyof typeof roleFilters];
          const searchMatch = searchTerm === '' || msg.content.toLowerCase().includes(searchTerm.toLowerCase());
          const firstMessageMatch = !hideFirstMessage || index !== 0;
          return roleMatch && searchMatch && firstMessageMatch;
        }))
      : item.messages.filter((msg: any, index: number) => {
          const roleMatch = roleFilters[msg.role as keyof typeof roleFilters];
          const searchMatch = searchTerm === '' || msg.content.toLowerCase().includes(searchTerm.toLowerCase());
          const firstMessageMatch = !hideFirstMessage || index !== 0;
          return roleMatch && searchMatch && firstMessageMatch;
        })
  })).filter(item => item.messages.length > 0);
  

  return (
    <div className="min-h-screen w-full bg-background text-foreground p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold">JSONL ChatML Editor</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          />
          <Moon className="h-4 w-4" />
        </div>
      </div>

      <div className="mb-4">
  <textarea
    className="w-full h-40 p-2 border border-gray-300 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-600"
    value={jsonlContent}
    onChange={handleInputChange}
    placeholder="Paste your JSONL or JSON content here..."
  />
  <Button onClick={() => handleInputChange({ target: { value: jsonlContent } } as React.ChangeEvent<HTMLTextAreaElement>)}>
    Reapply
  </Button>
</div>



      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="mb-4 space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <span>Show roles:</span>
          {Object.keys(roleFilters).map(role => (
            <label key={role} className="flex items-center space-x-2">
              <Checkbox
                checked={roleFilters[role as keyof typeof roleFilters]}
                onCheckedChange={(checked) => setRoleFilters(prev => ({ ...prev, [role]: checked === true }))}
              />
              <span>{role}</span>
            </label>
          ))}
          <div className="flex items-center space-x-2 ml-auto">
            <Input
              type="text"
              placeholder="Add custom role"
              value={newCustomRole}
              onChange={(e) => setNewCustomRole(e.target.value)}
              className="max-w-xs dark:bg-gray-700 dark:text-white"
            />
            <Button onClick={addCustomRole} size="sm">
              <Plus className="h-4 w-2" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <Checkbox
              checked={hideFirstMessage}
              onCheckedChange={(checked) => setHideFirstMessage(checked === true)}
            />
            <span>Hide first message</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox
              checked={showOnlyLatest}
              onCheckedChange={(checked) => setShowOnlyLatest(checked === true)}
            />
            <span>Show only latest messages</span>
          </label>
          <Input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Parsed Content:</h2>
        <div className="bg-gray-100 p-4 rounded dark:bg-gray-800">
          
          {filteredContent.map((item) => (
            <div key={item.itemIndex} className="mb-2 bg-white rounded shadow dark:bg-gray-700">
              <div className="flex justify-between items-center p-2 border-b dark:border-gray-600">
                <h3 className="text-lg font-bold">{item.itemIndex + 1}</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleItemExpansion(item.itemIndex)}
                    className="dark:text-white"
                  >
                    {expandedItems[item.itemIndex] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleExportItem(item.itemIndex)}
                    className="dark:text-white"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteItem(item.itemIndex)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {expandedItems[item.itemIndex] && (
                <div className="p-2">
                  {item.messages.map((msg: any, msgIndex: number) => (
                    <div key={msgIndex} className="mb-2 border-b pb-2 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-semibold text-sm">{msg.role}:</div>
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveMessage(item.itemIndex, msgIndex, -1)}
                            disabled={msgIndex === 0}
                          >
                            <ArrowUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveMessage(item.itemIndex, msgIndex, 1)}
                            disabled={msgIndex === item.messages.length - 1}
                          >
                            <ArrowDown className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteMessageContent(item.itemIndex, msgIndex)}
                          >
                            Clear
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteMessage(item.itemIndex, msgIndex)}
                            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <textarea
                                                className="w-full p-2 border border-gray-300 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 text-base dark:bg-gray-600 dark:text-white dark:border-gray-500"
                                                value={msg.content}
                                                onChange={(e) => {
                                                  const updatedContent = [...parsedContent];
                                                  updatedContent[item.itemIndex].messages[msgIndex].content = e.target.value;
                                                  setParsedContent(updatedContent);
                                                }}
                                                style={{ minHeight: '100px' }}
                                                onInput={(e) => {
                                                  const target = e.target as HTMLTextAreaElement;
                                                  target.style.height = 'auto';
                                                  target.style.height = target.scrollHeight + 'px';
                                                }}
                                              />
                                            </div>
                                          ))}
                                          <Button
                                            onClick={() => addMessage(item.itemIndex)}
                                            className="mt-2"
                                            size="sm"
                                          >
                                            <Plus className="mr-2 h-4 w-4" /> Add Message
                                          </Button>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                  {/* {visibleItems < filteredContent.length && (
                                    <div ref={observerRef} className="h-10" />
                                  )} */}
                                </div>
                              </div>
                              <Dialog open={isExportDialogOpen} onOpenChange={setIsExportDialogOpen}>
                                <DialogTrigger asChild>
                                  <Button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 flex items-center"
                                    onClick={handleExport}
                                  >
                                    <Download className="mr-2" />
                                    Export JSONL
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[725px] dark:bg-gray-800 dark:text-white">
                                  <DialogHeader>
                                    <DialogTitle>Exported JSONL Content</DialogTitle>
                                  </DialogHeader>
                                  <div className="mt-4">
                                    <textarea
                                      ref={exportTextAreaRef}
                                      className="w-full h-[300px] p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                      value={exportedContent}
                                      readOnly
                                    />
                                  </div>
                                  <div className="mt-4 flex justify-end">
                                  <Button onClick={() => handleCopyToClipboard(exportedContent, true)} className="flex items-center">
                                    {isCopied ? <Check className="mr-2" /> : <Copy className="mr-2" />}
                                    {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                                  </Button>
                                    <Button onClick={() => {
                                      const blob = new Blob([exportedContent], { type: 'application/json' });
                                      const href = URL.createObjectURL(blob);
                                      const link = document.createElement('a');
                                      link.href = href;
                                      link.download = 'exported_data.jsonl';
                                      document.body.appendChild(link);
                                      link.click();
                                      document.body.removeChild(link);
                                      URL.revokeObjectURL(href);
                                    }} className="flex items-center ml-2">
                                      <Download className="mr-2" />
                                      Download JSONL
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Dialog open={isItemExportDialogOpen} onOpenChange={setIsItemExportDialogOpen}>
                              <DialogContent className="sm:max-w-[725px] dark:bg-gray-800 dark:text-white">
                                <DialogHeader>
                                  <DialogTitle>Exported JSONL Content for Item {exportingItemIndex !== null ? exportingItemIndex + 1 : ''}</DialogTitle>
                                </DialogHeader>
                                <div className="mt-4">
                                  <textarea
                                    className="w-full h-[300px] p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    value={itemExportContent}
                                    readOnly
                                  />
                                </div>
                                <div className="mt-4 flex justify-end">
                                  <Button onClick={() => handleCopyToClipboard(itemExportContent)} className="flex items-center">
                                    {isCopied ? <Check className="mr-2" /> : <Copy className="mr-2" />}
                                    {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                                  </Button>
                                  <Button onClick={() => {
                                    const blob = new Blob([itemExportContent], { type: 'application/json' });
                                    const href = URL.createObjectURL(blob);
                                    const link = document.createElement('a');
                                    link.href = href;
                                    link.download = `exported_item_${exportingItemIndex !== null ? exportingItemIndex + 1 : ''}.jsonl`;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    URL.revokeObjectURL(href);
                                  }} className="flex items-center ml-2">
                                    <Download className="mr-2" />
                                    Download JSONL
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            </div>
                          );
                        };
                        
                        export default function Home() {
                          return (
                            <main className="h-full">
                              <JSONLEditor />
                            </main>
                          )
                        }
                        
