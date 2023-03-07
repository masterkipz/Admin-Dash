import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
} from "../../api/inventoryApi";
import { useState } from "react";


function InventoryList() {

    const [newInventory, setNewInventory] = useState('')
    const queryClient = useQueryClient();
    
    const {
        isLoading,
        isError,
        error,
        data: inventory
    } = useQuery("item", getInventory);

    const addInventoryMutation = useMutation(addInventory, {
        onSuccess: () => {
            // Invalidates the inventory cache and triggers a refetch
            queryClient.invalidateQueries("inventory");
        }
    });

    const updateInventoryMutation = useMutation(updateInventory, {
        onSuccess: () => {
            // Invalidates the inventory cache and triggers a refetch
            queryClient.invalidateQueries("inventory");
        }
    });

    const deleteInventoryMutation = useMutation(deleteInventory, {
        onSuccess: () => {
            // Invalidates the inventory cache and triggers a refetch
            queryClient.invalidateQueries("inventory");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addInventoryMutation.mutate({
            userId:1, title: newInventory, completed:false 
        })
        setNewInventory('')
    }

    const newInventorySection = (
        <form onSubmit={handleSubmit}>
        <label htmlFor="new-inventory">Enter a new Item</label>
        </form>
    )
    


    return <div>InventoryList</div>;
}

export default InventoryList;
