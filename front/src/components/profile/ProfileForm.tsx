import { useForm } from "react-hook-form";
import useGetUser from "../../hooks/useGetUser";
import type { UpdateProfileForm, User } from "../../types";
import ErrorMessage from "../ErrorMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateImage, updateProfile } from "../../api/userApi";
import { toast } from "react-toastify";
import type { ChangeEvent } from "react";

export default function ProfileForm() {
  const { user } = useGetUser();
  const queryClient = useQueryClient();

  const initialValues = {
    handle: user?.handle,
    description: user?.description,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileForm>({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Perfil Actualizado correctamente");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: mutateImage } = useMutation({
    mutationFn: updateImage,
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueryData(["user"], (prevData: User) => {
        return {
          ...prevData,
          image: data,
        };
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    mutateImage(file);
  };

  function submitData(data: UpdateProfileForm) {
    mutate(data);
  }

  return (
    <form
      className="bg-white p-10 rounded-lg space-y-5"
      onSubmit={handleSubmit(submitData)}
    >
      <legend className="text-2xl text-slate-800 text-center">
        Editar Información
      </legend>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="handle">Handle:</label>
        <input
          type="text"
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="handle o Nombre de Usuario"
          {...register("handle", { required: "El handle es obligatorio" })}
        />
        {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="description">Descripción:</label>
        <textarea
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="Tu Descripción"
          {...register("description", {
            required: "La descripción es obligatoria",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="handle">Imagen:</label>
        <input
          id="image"
          type="file"
          name="handle"
          className="border-none bg-slate-100 rounded-lg p-2"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-100 rounded-lg font-bold cursor-pointer"
        value="Guardar Cambios"
      />
    </form>
  );
}
