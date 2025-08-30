"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { EllipsisVertical, ListFilter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "../ui/switch"
import Image from "next/image"

type FileSize = {
  value: number
  unit: "KB" | "MB" | "GB"
}

type Document = {
  id: string
  iconType: "PDF" | "DOC"
  name: string
  type: "Legal" | "Vendors & Assets" | "Technology" | "Financial"
  size: FileSize
  includeAI: boolean
  includeDashboard: boolean
  stageAccess: "Full" | "Onboarding" | "Franchisee" | "Prospect"
}

const data: Document[] = [
  {
    id: "1",
    iconType: "PDF",
    name: 'Tech requirements.pdf',
    size: {value: 200, unit: "KB"},
    type: "Legal",
    includeAI: true,
    includeDashboard: true,
    stageAccess: "Full",
  },
    {
    id: "2",
    iconType: "PDF",
    name: 'Dashboard screenshot.jpg',
    size: {value: 720, unit: "KB"},
    type: "Vendors & Assets",
    includeAI: true,
    includeDashboard: true,
    stageAccess: "Onboarding",
  },
  {
    id: "3",
    iconType: "DOC",
    name: 'Dashboard prototype recording.mp4',
    size: {value: 16, unit: "MB"},
    type: "Technology",
    includeAI: false,
    includeDashboard: true,
    stageAccess: "Franchisee",
  },
   {
    id: "4",
    iconType: "DOC",
    name: 'Financial Overview',
    size: {value: 4.2, unit: "MB"},
    type: "Financial",
    includeAI: true,
    includeDashboard: true,
    stageAccess: "Prospect",
  },
  {
    id: "5",
    iconType: "DOC",
    name: 'UX Design Guidelines.docx',
    size: {value: 400, unit: "KB"},
    type: "Legal",
    includeAI: true,
    includeDashboard: false,
    stageAccess: "Onboarding",
  },
    {
    id: "6",
    iconType: "PDF",
    name: 'Dashboard interaction.aep',
    size: {value: 12, unit: "MB"},
    type: "Legal",
    includeAI: true,
    includeDashboard: false,
    stageAccess: "Onboarding",
  },
    {
    id: "7",
    iconType: "PDF",
    name: 'Briefing call recording.mp3',
    size: {value: 18.6, unit: "MB"},
    type: "Financial",
    includeAI: false,
    includeDashboard: false,
    stageAccess: "Onboarding",
  },
]

const columns: ColumnDef<Document>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="w-5 h-5 data-[state=checked]:bg-[#7C3AED] data-[state=checked]:border-[#7C3AED] border-2 border-[#D0D5DD]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="w-5 h-5 data-[state=checked]:bg-[#7C3AED] data-[state=checked]:border-[#7C3AED] border-2 border-[#D0D5DD]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Document Name",
    cell: ({ row }) => {
      const doc = row.original
       const getFileIcon = (iconType: Document["iconType"]) => {
      switch (iconType) {
        case "PDF":
          return "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1756553578/File_type_icon_1_shwx2h.svg"
        case "DOC":
          return "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1756553581/File_type_icon_lstfbu.svg"
      }
    }
      return (
        <div className="flex gap-3 items-center">     
          <Image width={40} height={40} src={getFileIcon(doc.iconType)} alt={doc.iconType} className="w-8 h-8" />
          <div>
          <div className="font-medium text-[14px] leading-[20px] text-[#101828] font-inter">{doc.name}</div>
          <div className="text-[12px] leading-[18px] text-[#667085] font-inter">
            {doc.size.value} {doc.size.unit}
          </div>
          </div>
        </div>
      )
    },
  },

  {
 accessorKey: "type",
  header: "Document Type",
  cell: ({ row }) => {
    const type = row.original.type as Document["type"]

    const getTypeStyle = (type: Document["type"]) => {
      switch (type) {
        case "Legal":
          return "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]"
        case "Vendors & Assets":
          return "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]"
        case "Technology":
          return "bg-[#FEF6EE] text-[#B93815] border-[#F9DBAF]"
        case "Financial":
          return "bg-[#FDF2FA] text-[#C11574] border-[#FCCEEE]"
      }
    }

    return (
      <div
        className={`px-3 py-1 w-fit rounded-2xl border backdrop-blur-sm text-[12px] font-medium font-inter ${getTypeStyle(type)}`}
      >
        {type}
      </div>
    )
  },
  },
  {
    accessorKey: "includeAI",
    header: "AI App Inclusion",
     cell: ({ row }) => {
    const value = row.original.includeAI

    return (
      <div className="flex items-center justify-center">
     <Switch 
       checked={value} 
       className="data-[state=checked]:bg-[#2FBDFF] data-[state=unchecked]:bg-[#E4E7EC]"
     />
    </div>
    )
  },
  },
    {
    accessorKey: "includeDashboard",
    header: "Dashboard Inclusion",
     cell: ({ row }) => {
    const value = row.original.includeDashboard

    return (
      <div className="flex items-center justify-center">
     <Switch 
       checked={value} 
       className="data-[state=checked]:bg-[#2FBDFF] data-[state=unchecked]:bg-[#E4E7EC]"
     />
    </div>
    )
  },
  },
   {
    accessorKey: "stageAccess",
    header: "Stage Access",
    cell: ({ row }) => {
    const value = row.original.stageAccess

    return (
      <div className="flex items-center justify-center">
        <Select value={value}>
          <SelectTrigger className="w-[160px] h-[36px] text-[14px] font-medium text-[#344054] font-inter">
            <SelectValue placeholder="Select stage" />
          </SelectTrigger>
          <SelectContent className="font-inter">
            <SelectItem value="Full" className="text-[14px] font-medium">Full</SelectItem>
            <SelectItem value="Onboarding" className="text-[14px] font-medium">Onboarding</SelectItem>
            <SelectItem value="Franchisee" className="text-[14px] font-medium">Franchisee</SelectItem>
            <SelectItem value="Prospect" className="text-[14px] font-medium">Prospect</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
  }
]

export default function Uploads() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  })

  return (
    <div className="overflow-hidden rounded-[16px] border border-[#EAECF0] bg-white mx-7 my-6  font-inter ">
      <div className="flex flex-col px-6 pt-6 pb-2 relative">
        <h1 className="font-semibold text-[18px] leading-[28px] text-[#101828]">My Uploads</h1>
        <EllipsisVertical size={20} color="#98A2B3" className="absolute right-6 top-6 cursor-pointer"/>
        <p className="text-[14px] font-normal leading-[22px] text-[#475467] mt-1">Documents that are uploaded by you.</p>
      </div>
      <hr  className="mb-2"/>
      <div className="px-6 pt-2 pb-4 flex items-center gap-4">
        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#98A2B3]" />
          <Input
            type="text"
            placeholder="Search here.."
            className="pl-9 pr-3 focus-visible:ring-0 focus:ring-0 focus:outline-none w-full h-[44px] rounded-[8px] border border-[#D0D5DD] bg-[#F9FAFB] text-[#101828] text-[15px]"
          />
        </div>
        <Button variant="outline" className="ml-auto h-[44px] px-4 rounded-[8px] border border-[#D0D5DD] bg-white text-[#344054] text-[14px] font-medium flex items-center gap-2 font-inter"><ListFilter className="w-4 h-4" /> Filters</Button>
      </div>
      <hr />
      <div className=" pb-6">
        <Table className="w-full border-2 border-[#F9FAFB]">
          <TableHeader className="bg-[#F9FAFB]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="">
                {headerGroup.headers.map((header, index) => (
                  <TableHead
                    key={header.id}
                    className={`text-[#667085] text-[12px] font-medium px-4 py-3 border-b border-[#EAECF0] text-center font-inter ${[0, 1, 2].includes(index) ? 'text-left' : ''}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
                <TableHead className="text-[#667085] text-[12px] font-medium px-4 py-3 border-b border-[#EAECF0] text-center font-inter"> </TableHead>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-[#F9FAFB]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-4 align-middle border-b border-[#EAECF0]">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                  <TableCell className="px-4 py-4 align-middle text-center border-b border-[#EAECF0]">
                    <div className="flex justify-center items-center gap-4">
                      <button className="text-[#475467] font-medium text-[14px] leading-[20px] hover:underline bg-transparent border-none cursor-pointer font-inter">Delete</button>
                      <button className="text-[#279DD4] font-medium text-[14px] leading-[20px] hover:underline bg-transparent border-none cursor-pointer font-inter">Edit</button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
