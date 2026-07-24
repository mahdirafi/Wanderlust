"use client";

import { AlertDialog, Button } from "@heroui/react";
import { BiTrash } from "react-icons/bi";

export function BookingCancelAlert ({bookingId}) {
  console.log("bookingId" ,bookingId);

    const handleDelete = async() =>{
       const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
        method:"DELETE",
        headers: {
            "content-type" : "application/json",
        }
    })
    const data = await res.json();
    console.log("Data" , data);

    window.location.reload();
    };

  return (
    <AlertDialog>
      <Button variant="outline" className={"rounded-none text-red-500"}><BiTrash/> Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button  variant="danger" onClick={handleDelete}>
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}